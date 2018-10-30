const conditionsFunctions = require('./conditions');

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
		return actualCondition;
	});

	if (result && condition.value) {
		return {value: condition.value};
	} else if (result && condition.value === false) {
		return false;
	} else if (condition.value) {
		return;
	}

	return {
		isActive: Boolean(result)
	};
}

function calculate(user, featureConditions) {
	for (let i = 0, l = featureConditions.length; i < l; i++) {
		const conditions = featureConditions[i];

		try {
			const aux = evaluateCondition(user, conditions);

			if (aux && aux.isActive !== undefined && aux.isActive !== false) {
				return aux;
			} else if (aux === false) {
				return false;
			} else if (aux.value) {
				return aux.value;
			}
		} catch (e) {
			console.log('****************************');
			console.log('ERROR AL CALCULAR CONDITIONS');
			console.log(e);
			console.log(`USER:${ JSON.stringify(user)}`);
			console.log(`CONDITIONS:${ JSON.stringify(conditions)}`);
			console.log('****************************');
		}
	}
	return {
		isActive: false
	};
}

function calculateConditions(user, values) {
	return calculate(user, values);
}


module.exports = {
	calculateConditions
};
