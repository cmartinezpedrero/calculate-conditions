const compareVersions = require('compare-versions');


function minAppVersion(user, appVersion) {
	// compareVersions('10.1.8', '10.0.4'); //  1
	// compareVersions('10.0.1', '10.0.1'); //  0
	// compareVersions('10.1.1', '10.2.2'); // -1
	if (user !== null && user.appVersion !== null && user.appVersion !== undefined
		&& appVersion !== null && appVersion !== undefined) {
		try {
			const compareResult = compareVersions(user.appVersion, appVersion);

			if (compareResult >= 0) {
				return true;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}

function maxAppVersion(user, appVersion) {
	// compareVersions('10.1.8', '10.0.4'); //  1
	// compareVersions('10.0.1', '10.0.1'); //  0
	// compareVersions('10.1.1', '10.2.2'); // -1
	if (user !== null && user.appVersion !== null && user.appVersion !== undefined
		&& appVersion !== null && appVersion !== undefined) {
		try {
			const compareResult = compareVersions(user.appVersion, appVersion);

			if (compareResult <= 0) {
				return true;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}

function minOsVersion(user, osVersion) {
	// compareVersions('10.1.8', '10.0.4'); //  1
	// compareVersions('10.0.1', '10.0.1'); //  0
	// compareVersions('10.1.1', '10.2.2'); // -1
	if (user !== null && user.osVersion !== null && user.osVersion !== undefined
		&& osVersion !== null && osVersion !== undefined) {
		try {
			const compareResult = compareVersions(user.osVersion, osVersion);

			if (compareResult >= 0) {
				return true;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}

function maxOsVersion(user, osVersion) {
	// compareVersions('10.1.8', '10.0.4'); //  1
	// compareVersions('10.0.1', '10.0.1'); //  0
	// compareVersions('10.1.1', '10.2.2'); // -1
	if (user !== null && user.osVersion !== null && user.osVersion !== undefined
		&& osVersion !== null && osVersion !== undefined) {
		try {
			const compareResult = compareVersions(user.osVersion, osVersion);

			if (compareResult <= 0) {
				return true;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}

function isPlatform(user, platform) {
	if (user !== null && user.platform !== null && user.platform !== undefined
		&& platform !== null && platform !== undefined) {
		return platform.toUpperCase().includes(user.platform.toUpperCase());
	}
	return false;
}

function isEnvironment(user, environment) {
	if (user !== null && user.referer !== null && user.referer.env !== null && user.referer.env !== undefined
		&& environment !== null && environment !== undefined) {
		return environment.toUpperCase().includes(user.referer.env.toUpperCase());
	}
	return false;
}

function isEmployee(user, employee) {
	if (user !== null && user.isEmployee !== null && user.isEmployee !== undefined
		&& employee !== null && employee !== undefined) {
		return user.isEmployee === employee;
	}
	return false;
}

function isLang(user, lang) {
	if (user !== null && user.lang !== null && user.lang !== undefined
		&& lang !== null && lang !== undefined) {
		return lang.toUpperCase() === user.lang.toUpperCase();
	}
	return false;
}

function beginDateTime(user, beginTime) {
	if (beginTime) {
		const fechaActual = new Date();
		const fechaInicio = new Date(beginTime);

		return fechaActual.getTime() > fechaInicio.getTime();
	}
	return false;
}

function endDateTime(user, endTime) {
	if (endTime) {
		const fechaActual = new Date();
		const fechaFin = new Date(endTime);

		return fechaActual.getTime() < fechaFin.getTime();
	}
	return false;
}

module.exports = {
	minAppVersion, maxAppVersion,
	minOsVersion, maxOsVersion,
	isPlatform,
	isEnvironment,
	isEmployee,
	isLang,
	beginDateTime,
	endDateTime };

