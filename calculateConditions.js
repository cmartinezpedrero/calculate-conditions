const conditionsFunctions = require('./conditions');

const UID_USERAGENT_POSITION = 0;
const PLATFORM_USERAGENT_POSITION = 1;
const BRAND_USERAGENT_POSITION = 2;
const MODEL_USERAGENT_POSITION = 3;
const RESOLUTION_USERAGENT_POSITION = 4;
const OS_USERAGENT_POSITION = 5;
const OSVERSION_USERAGENT_POSITION = 6;
const APP_USERAGENT_POSITION = 7;
const APPVERSION_USERAGENT_POSITION = 8;
const SCREEN_USERAGENT_POSITION = 9;
const WEBVIEW_USERAGENT_POSITION = 10;

const REFERER_DOMAIN_POSITION = 2;
const REFERER_APP_POSITION = 5;
const REFERER_APP_PATH_POSITION = 3;
const REFERER_WOODY_PATH_POSITION = 5;
const REFERER_TABLET_PATH_POSITION = 4;

const HEADER_USERAGENT = 'user-agent';
const HEADER_CONTENT_LANGUAGE = 'content-language';
const HEADER_REFERER = 'referer';

function setUserAgentProperties(userAgent) {
	let body_base;
	let user;

	if (userAgent) {
		body_base = userAgent.split(';');
		user = {
		// UserAgent properties
			uid : body_base[UID_USERAGENT_POSITION],
			platform : body_base[PLATFORM_USERAGENT_POSITION],
			brand : body_base[BRAND_USERAGENT_POSITION],
			model : body_base[MODEL_USERAGENT_POSITION],
			resolution : body_base[RESOLUTION_USERAGENT_POSITION],
			os : body_base[OS_USERAGENT_POSITION],
			osVersion : body_base[OSVERSION_USERAGENT_POSITION],
			app : body_base[APP_USERAGENT_POSITION],
			appVersion : body_base[APPVERSION_USERAGENT_POSITION],
			screenDensity : body_base[SCREEN_USERAGENT_POSITION],
			webviewVersion : body_base[WEBVIEW_USERAGENT_POSITION]
		};
	}
	return user;
}

function setSessionProperties(body, user = {}) {
	if (body.user) {
		// Session properties
		if (body.user.id) {
			user.id = body.user.id;
		}
		if (body.user.isEmployee) {
			user.isEmployee = body.user.isEmployee;
		}
	}
	return user;
}

function refererDescompose(referer) {
	let refererOut;
	const res = referer.split('/');

	if (res[REFERER_DOMAIN_POSITION] === 'movil.bbva.es') {
		refererOut = {
			domain : res[REFERER_DOMAIN_POSITION],
			env : 'pr',
			path : res[3],
			app : res[4]
		};
	} else if (res[REFERER_DOMAIN_POSITION] === 'beta.movil.bbva.es') {
		refererOut = {
			domain : res[REFERER_DOMAIN_POSITION],
			env : 'beta',
			path : res[3],
			app : res [4]

		};
	} else {
		refererOut = {
			domain : res[REFERER_DOMAIN_POSITION],
			env : res[3],
			branch : res [4],
			path : res[5],
			app : res [6]
		};
	}
	return refererOut;
}

function setEnvProperties(headers, user = {}) {
	const referer = refererDescompose(headers[HEADER_REFERER]);

	if (referer) {
		user.referer = referer;
	}
	if (headers[HEADER_CONTENT_LANGUAGE]) {
		// Env properties
		user.lang = headers[HEADER_CONTENT_LANGUAGE];
	}
	return user;
}


function createUser(headers, body) {
	let user;

	if (headers[HEADER_USERAGENT]) {
		user = setUserAgentProperties(headers[HEADER_USERAGENT]);
		if (headers[HEADER_CONTENT_LANGUAGE]) {
			if (headers[HEADER_REFERER]) {
				user = setEnvProperties(headers, user);
				if (body) {
					user = setSessionProperties(headers, user);
				}
				return user;
			}
			const error = {
				description: 'No hay configuracion para la app. No existe Referer',
				headers: JSON.stringify(headers)
			};

			throw (error);
		}
		const error = {
			description: 'No hay configuracion para la app. No existe Lang',
			headers: JSON.stringify(headers)

		};

		throw (error);
	}
	const error = {
		description: 'No hay configuracion para la app. No existe User-Agent',
		headers: JSON.stringify(headers)
	};

	throw (error);
}

/**
 * Evaluate a set of critera. Return true if ALL criteria is met.
 *
 * @param {Object} criteriaSet The set of criteria, where each key is a criteria ID
 *        and each value is some data to send to that criteria function.
 * @param {Object} user The expected user object to check against in each criteria function.
 * @return {boolean} Returns true if ALL criteria are met, false otherwise.
 */
function evaluateCondition(user, condition) {
	const result = Object.keys(condition).every((actualCondition) => {
		if (actualCondition !== 'value') {
			const conditionValue = condition[actualCondition];
			const functionEval = conditionsFunctions[actualCondition];
			const evalResult = functionEval(user, conditionValue);

			return evalResult;
		}
		// devuelve true para cuando pasa por el condition 'value'
		return condition[actualCondition];
	});

	if (result && condition.value) {
		return condition.value;
	} else if (condition.value){
		return;
	}

	return { isActive: Boolean(result) };
}



function calculate(user, featureConditions) {
	for (let i = 0, l = featureConditions.values.length; i < l; i++) {
		const condition = featureConditions.values[i];
		const aux = evaluateCondition(user, condition);

		if (aux !== undefined) {
			return aux;
		}
	}
}

function calculateConditions(user, values) {

	return calculate(user, values);
}


module.exports = { calculateConditions };
