const compareVersions = require('compare-versions');



function minAppVersion(user, appVersion) {
	// compareVersions('10.1.8', '10.0.4'); //  1
	// compareVersions('10.0.1', '10.0.1'); //  0
	// compareVersions('10.1.1', '10.2.2'); // -1
	if (user !== null && user.appVersion !== null && user.appVersion !== undefined &&
		appVersion !== null && appVersion !== undefined) {
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
	if (user !== null && user.appVersion !== null && user.appVersion !== undefined &&
		appVersion !== null && appVersion !== undefined) {
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
	if (user !== null && user.osVersion !== null && user.osVersion !== undefined &&
		osVersion !== null && osVersion !== undefined) {
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
	if (user !== null && user.osVersion !== null && user.osVersion !== undefined &&
		osVersion !== null && osVersion !== undefined) {
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
	if (user !== null && user.platform !== null && user.platform !== undefined &&
		platform !== null && platform !== undefined) {
		return platform.toUpperCase().includes(user.platform.toUpperCase());
	}
	return false;
}

function isNotPlatform(user, platform) {
	if (user !== null && user.platform !== null && user.platform !== undefined &&
		platform !== null && platform !== undefined) {
		return platform.toUpperCase().includes(user.platform.toUpperCase());
	}
	return false;
}

function isApp(user, app) {
	if (user !== null && user.app !== null && user.app !== undefined &&
		app !== null && app !== undefined) {
		return app.toUpperCase().includes(user.app.toUpperCase());
	}
	return false;
}

function isEnvironment(user, environment) {
	if (user !== null && user.referer !== null && user.referer.env !== null && user.referer.env !== undefined &&
		environment !== null && environment !== undefined) {
		return environment.toUpperCase().includes(user.referer.env.toUpperCase());
	}
	return false;
}

function isEmployee(user, employee) {
	if (user !== null && user.isEmployee !== null && user.isEmployee !== undefined &&
		employee !== null && employee !== undefined) {
		return user.isEmployee === employee;
	}
	return false;
}

function isLang(user, lang) {
	if (user !== null && user.lang !== null && user.lang !== undefined &&
		lang !== null && lang !== undefined) {
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

function isModel(user, model) {
	if (user !== null && user.model !== null && user.model !== undefined &&
		model !== null && model !== undefined) {
		return model.toUpperCase().includes(user.model.toUpperCase());
	}
	return false;
}

function isUpdatableWebView(user, updatableWebView) {
	const updatableWebViewList = 'Chrome/45.0.2454.95 Mobile,Chrome/45.0.2454.87 Mobile,Chrome/45.0.2454.19 Mobile,Chrome/46.0.2490.76 Mobile,Chrome/46.0.2490.64 Mobile,Chrome/46.0.2490.52 Mobile,Chrome/46.0.2490.41 Mobile,Chrome/46.0.2490.28 Mobile,Chrome/46.0.2490.23 Mobile,Chrome/53.0.2785.124 Mobile,Chrome/53.0.2785.121 Mobile,Chrome/53.0.2785.97 Mobile,Chrome/53.0.2785.113 Mobile,Chrome/54.0.2840.68 Mobile,Chrome/54.0.2840.85 Mobile,Chrome/53.0.2785.135 Mobile,Chrome/55.0.2883.91 Mobile,Chrome/56.0.2924.53 Mobile,Chrome/56.0.2924.59 Mobile,Chrome/56.0.2924.68 Mobile,Chrome/56.0.2924.78 Mobile,Chrome/56.0.2924.87 Mobile,Chrome/57.0.2987.19 Mobile,Chrome/57.0.2987.38 Mobile,Chrome/57.0.2987.54 Mobile,Chrome/57.0.2987.74 Mobile,Chrome/57.0.2987.88 Mobile,Chrome/57.0.2987.97 Mobile,Chrome/57.0.2987.108 Mobile,Chrome/45.0.2454.19,Chrome/45.0.2454.87,Chrome/45.0.2454.95,Chrome/46.0.2490.23,Chrome/46.0.2490.28,Chrome/46.0.2490.41,Chrome/46.0.2490.52,Chrome/46.0.2490.64,Chrome/46.0.2490.76,Chrome/53.0.2785.97,Chrome/53.0.2785.113,Chrome/53.0.2785.121,Chrome/53.0.2785.124,Chrome/53.0.2785.135,Chrome/54.0.2840.68,Chrome/54.0.2840.85,Chrome/53.0.2785.143 Mobile,Chrome/53.0.2785.143,Chrome/55.0.2883.91,Chrome/56.0.2924.53,Chrome/56.0.2924.59,Chrome/56.0.2924.68,Chrome/56.0.2924.78,Chrome/56.0.2924.87,Chrome/57.0.2987.19,Chrome/57.0.2987.38,Chrome/57.0.2987.54,Chrome/57.0.2987.74,Chrome/57.0.2987.88,Chrome/57.0.2987.97,Chrome/57.0.2987.108,Chrome/55.0.2883.84 Mobile,Chrome/52.0.2743.98 Mobile,Chrome/51.0.2704.90 Mobile,Chrome/51.0.2704.81 Mobile,Chrome/50.0.2661.89 Mobile,Chrome/49.0.2623.105 Mobile,Chrome/48.0.2564.95 Mobile,Chrome/47.0.2526.83 Mobile,Chrome/45.0.2454.94 Mobile,Chrome/44.0.2403.633 Mobile,Chrome/43.0.2357.93 Mobile,Chrome/42.0.2311.111 Mobile,Chrome/41.0.2272.96 Mobile,Chrome/40.0.2214.109 Mobile,Chrome/39.0.2171.93 Mobile,Chrome/38.0.2125.114 Mobile,Chrome/36.0.1985.135 Mobile,Chrome/37.0.2062.117 Mobile,Chrome/30.0.1599.82 Mobile,Chrome/29.0.1547.72 Mobile,Chrome/55.0.2883.84,Chrome/52.0.2743.98,Chrome/51.0.2704.90,Chrome/51.0.2704.81,Chrome/50.0.2661.89,Chrome/49.0.2623.105,Chrome/48.0.2564.95,Chrome/47.0.2526.83,Chrome/45.0.2454.94,Chrome/44.0.2403.633,Chrome/43.0.2357.93,Chrome/42.0.2311.111,Chrome/41.0.2272.96,Chrome/40.0.2214.109,Chrome/39.0.2171.93,Chrome/38.0.2125.114,Chrome/36.0.1985.135,Chrome/37.0.2062.117,Chrome/30.0.1599.82,Chrome/29.0.1547.72,Chrome/43.0.2357.121 Mobile,Chrome/43.0.2357.121,Chrome/59.0.3071.125 Mobile,Chrome/59.0.3071.125,Chrome/60.0.3112.116 Mobile,Chrome/60.0.3112.116,Chrome/58.0.3029.83 Mobile,Chrome/58.0.3029.83';

	if (user !== null && user.webviewVersion !== null && user.webviewVersion !== undefined &&
		updatableWebView === true) {
		return updatableWebViewList.toUpperCase().includes(user.webviewVersion.toUpperCase());
	}
	return false;
}

function isResolution(user, resolution) {
	if (user !== null && user.resolution !== null && user.resolution !== undefined &&
		resolution !== null && resolution !== undefined) {
		return resolution.toUpperCase() === user.resolution.toUpperCase();
	}
	return false;
}

function isScreenDensity(user, screenDensity) {
	if (user !== null && user.screenDensity !== null && user.screenDensity !== undefined &&
		screenDensity !== null && screenDensity !== undefined) {
		return screenDensity.toUpperCase() === user.screenDensity.toUpperCase();
	}
	return false;
}

function includeGlobalSegments(user, globalSegments) {
	if (user !== null && user.segment !== null && user.segment !== undefined &&
		globalSegments !== null && globalSegments !== undefined) {
		const segments = globalSegments.split(',');

		for (const property in segments) {
			if (user.segment === segments[property]) {
				return true;
			}
		}
	}
	return false;
}

function excludeGlobalSegments(user, globalSegments) {
	if (user !== null && user.segment !== null && user.segment !== undefined &&
		globalSegments !== null && globalSegments !== undefined) {
		const segments = globalSegments.split(',');

		for (const property in segments) {
			if (user.segment === segments[property]) {
				return false;
			}
		}
	}
	return true;
}

function beginOnlyHour(user, beginTime) {
	if (beginTime) {
		const horaActual = new Date();
		const beginTimeAux = (beginTime).split(":");
		const horaInicio = new Date();
		horaInicio.setHours(beginTimeAux[0], beginTimeAux[1]);

		return horaActual.getHours() > horaInicio.getHours();
	}
	return false;
}

function endOnlyHour(user, endTime) {

	if (endTime) {
		const horaActual = new Date();
		const endTimeAux = (endTime).split(":");
		const horaFin = new Date();
		horaFin.setHours(endTimeAux[0], endTimeAux[1]);

		return horaActual.getHours() < horaFin.getHours();
	}
	return false;
}

function betatesters(user, betatestersList) {

	if (user !== null && user.id !== null && user.id !== undefined &&
		betatestersList !== null && betatestersList !== undefined) {
		betatestersList.users.toUpperCase()

		return betatestersList.users.toUpperCase().includes(user.id);
	}
	return false;
}

function minPreviousAppVersion(user, minPreviousApp) {
	// compareVersions('10.1.8', '10.0.4'); //  1
	// compareVersions('10.0.1', '10.0.1'); //  0
	// compareVersions('10.1.1', '10.2.2'); // -1
	if (user !== null && user.previousAppVersion !== null && user.previousAppVersion !== undefined &&
		minPreviousApp !== null && minPreviousApp !== undefined) {
		try {
			const compareResult = compareVersions(user.previousAppVersion, minPreviousApp);

			if (compareResult >= 0) {
				return true;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}

function includeEconomicData(user, economicData) {
	if (user !== null && user.economicData !== null && user.economicData !== undefined &&
		economicData !== null && economicData !== undefined) {
		const data = economicData.split(',');

		for (const property in data) {
			if (user.economicData === data[property]) {
				return true;
			}
		}
	}
	return false;
}

module.exports = {
	minAppVersion,
	maxAppVersion,
	minOsVersion,
	maxOsVersion,
	isPlatform,
	isNotPlatform,
	isApp,
	isEnvironment,
	isEmployee,
	isLang,
	isModel,
	beginDateTime,
	endDateTime,
	isUpdatableWebView,
	isResolution,
	isScreenDensity,
	includeGlobalSegments,
	excludeGlobalSegments,
	beginOnlyHour,
	endOnlyHour,
	betatesters,
	minPreviousAppVersion,
	includeEconomicData
};
