const expect = require('chai').expect;
const conditions = require('../conditions');

// TEST PARA CONDITION minAppVersion
describe('TEST CONDITIONS - minAppVersion():', () => {
	it('Test para funcion minAppVersion con version de usuario superior a minAppVersion', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const minAppVersion = '6.4.9';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion minAppVersion con version de usuario igual a minAppVersion', () => {
		const user = {
			appVersion : '6.4.9'
		};
		const minAppVersion = '6.4.9';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion minAppVersion con version de usuario inferior a minAppVersion', () => {
		const user = {
			appVersion : '6.3.0'
		};
		const minAppVersion = '6.5.0';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minAppVersion con version de usuario sin patch', () => {
		const user = {
			appVersion : '6.5'
		};
		const minAppVersion = '6.5.1';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minAppVersion sin version de usuario', () => {
		const user = {};
		const minAppVersion = '6.5.1';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minAppVersion con minAppVersion sin patch', () => {
		const user = {
			appVersion : '6.5.1'
		};
		const minAppVersion = '6.5';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion minAppVersion sin minAppVersion', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const minAppVersion = null;
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minAppVersion con minAppVersion vacia', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const minAppVersion = '';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minAppVersion con minAppVersion con texto', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const minAppVersion = 'aaaa';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minAppVersion con minAppVersion con version y texto', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const minAppVersion = '6.5.alpha';
		const result = conditions.minAppVersion(user, minAppVersion);

		expect(result).to.be.eql(false);
	});
});

// TEST PARA CONDITION maxAppVersion
describe('TEST CONDITIONS - maxAppVersion():', () => {
	it('Test para funcion maxAppVersion con version de usuario superior a maxAppVersion', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const maxAppVersion = '6.4.9';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxAppVersion con version de usuario igual a maxAppVersion', () => {
		const user = {
			appVersion : '6.4.9'
		};
		const maxAppVersion = '6.4.9';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion maxAppVersion con version de usuario inferior a maxAppVersion', () => {
		const user = {
			appVersion : '6.3.0'
		};
		const maxAppVersion = '6.5.0';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion maxAppVersion con version de usuario sin patch', () => {
		const user = {
			appVersion : '6.5'
		};
		const maxAppVersion = '6.5.1';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion maxAppVersion sin version de usuario', () => {
		const user = {};
		const maxAppVersion = '6.5.1';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxAppVersion con maxAppVersion sin patch', () => {
		const user = {
			appVersion : '6.5.1'
		};
		const maxAppVersion = '6.5';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxAppVersion sin maxAppVersion', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const maxAppVersion = null;
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxAppVersion con maxAppVersion vacia', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const maxAppVersion = '';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxAppVersion con maxAppVersion con texto', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const maxAppVersion = 'aaaa';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxAppVersion con maxAppVersion con version y texto', () => {
		const user = {
			appVersion : '6.5.0'
		};
		const maxAppVersion = '6.5.alpha';
		const result = conditions.maxAppVersion(user, maxAppVersion);

		expect(result).to.be.eql(false);
	});
});

describe('TEST CONDITIONS - minOsVersion():', () => {
	it('Test para funcion minOsVersion con version de usuario superior a minOsVersion', () => {
		const user = {
			osVersion : '5.0'
		};
		const minOsVersion = '4.9';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion minOsVersion con version de usuario igual a minOsVersion', () => {
		const user = {
			osVersion : '4.9'
		};
		const minOsVersion = '4.9';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion minOsVersion con version de usuario inferior a minOsVersion', () => {
		const user = {
			osVersion : '3.0'
		};
		const minOsVersion = '5.0';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minOsVersion con version de usuario sin patch', () => {
		const user = {
			osVersion : '5'
		};
		const minOsVersion = '5.1';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minOsVersion sin version de usuario', () => {
		const user = {};
		const minOsVersion = '5.1';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minOsVersion con minOsVersion sin patch', () => {
		const user = {
			osVersion : '5.1'
		};
		const minOsVersion = '5';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion minOsVersion sin minOsVersion', () => {
		const user = {
			osVersion : '5.0'
		};
		const minOsVersion = null;
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minOsVersion con minOsVersion vacia', () => {
		const user = {
			osVersion : '5.0'
		};
		const minOsVersion = '';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minOsVersion con minOsVersion con texto', () => {
		const user = {
			osVersion : '5.0'
		};
		const minOsVersion = 'aaaa';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion minOsVersion con minOsVersion con version y texto', () => {
		const user = {
			osVersion : '5.0'
		};
		const minOsVersion = '5.alpha';
		const result = conditions.minOsVersion(user, minOsVersion);

		expect(result).to.be.eql(false);
	});
});

// TEST PARA CONDITION maxOsVersion
describe('TEST CONDITIONS - maxOsVersion():', () => {
	it('Test para funcion maxOsVersion con version de usuario superior a maxOsVersion', () => {
		const user = {
			osVersion : '5.0'
		};
		const maxOsVersion = '4.9';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxOsVersion con version de usuario igual a maxOsVersion', () => {
		const user = {
			osVersion : '4.9'
		};
		const maxOsVersion = '4.9';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion maxOsVersion con version de usuario inferior a maxOsVersion', () => {
		const user = {
			osVersion : '3.0'
		};
		const maxOsVersion = '5.0';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion maxOsVersion con version de usuario sin patch', () => {
		const user = {
			osVersion : '5'
		};
		const maxOsVersion = '5.1';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion maxOsVersion sin version de usuario', () => {
		const user = {};
		const maxOsVersion = '5.1';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxOsVersion con maxOsVersion sin patch', () => {
		const user = {
			osVersion : '5.1'
		};
		const maxOsVersion = '5';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxOsVersion sin maxOsVersion', () => {
		const user = {
			osVersion : '5.0'
		};
		const maxOsVersion = null;
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxOsVersion con maxOsVersion vacia', () => {
		const user = {
			osVersion : '5.0'
		};
		const maxOsVersion = '';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxOsVersion con maxOsVersion con texto', () => {
		const user = {
			osVersion : '5.0'
		};
		const maxOsVersion = 'aaaa';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion maxOsVersion con maxOsVersion con version y texto', () => {
		const user = {
			osVersion : '5.0'
		};
		const maxOsVersion = '5.alpha';
		const result = conditions.maxOsVersion(user, maxOsVersion);

		expect(result).to.be.eql(false);
	});
});

// TEST PARA CONDITION isPlatform
describe('TEST CONDITIONS - isPlatform():', () => {
	it('Test para funcion isPlatform user.platform = Android, expected = Android ', () => {
		const user = {
			platform : 'Android'
		};
		const isPlatform = 'Android';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isPlatform user.platform = ANDROID, expected =  Android ', () => {
		const user = {
			platform : 'ANDROID'
		};
		const isPlatform = 'Android';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isPlatform user.platform = android, expected = Android ', () => {
		const user = {
			platform : 'android'
		};
		const isPlatform = 'Android';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isPlatform user.platform = Android, expected = ANDROID ', () => {
		const user = {
			platform : 'Android'
		};
		const isPlatform = 'ANDROID';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isPlatform user.platform = Android, expected = android ', () => {
		const user = {
			platform : 'Android'
		};
		const isPlatform = 'android';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isPlatform user.platform = Android, expected = iPhone ', () => {
		const user = {
			platform : 'Android'
		};
		const isPlatform = 'iPhone';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isPlatform user.platform = iPhone, expected = Android ', () => {
		const user = {
			platform : 'iPhone'
		};
		const isPlatform = 'Android';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isPlatform user.platform = Android, expected = Android,iPhone ', () => {
		const user = {
			platform : 'Android'
		};
		const isPlatform = 'Android,iPhone';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isPlatform user.platform = iPhone, expected = Android,iPhone ', () => {
		const user = {
			platform : 'iPhone'
		};
		const isPlatform = 'Android,iPhone';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isPlatform user.platform = aaaaa, expected = Android,iPhone ', () => {
		const user = {
			platform : 'aaaaa'
		};
		const isPlatform = 'Android,iPhone';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isPlatform user = null, expected = Android,iPhone ', () => {
		const user = null;
		const isPlatform = 'Android,iPhone';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isPlatform user.platform = null, expected = Android,iPhone ', () => {
		const user = {
			platform : null
		};
		const isPlatform = 'Android,iPhone';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isPlatform user.platform = undefined, expected = Android,iPhone ', () => {
		const user = {
			platform : undefined
		};
		const isPlatform = 'Android,iPhone';
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isPlatform user.platform = Android, expected = null ', () => {
		const user = {
			platform : 'Android'
		};
		const isPlatform = null;
		const result = conditions.isPlatform(user, isPlatform);

		expect(result).to.be.eql(false);
	});
});

// TEST PARA CONDITION isEnvironment
describe('TEST CONDITIONS - isEnvironment():', () => {
	it('Test para funcion isEnvironment user.environment = ei, expected = ei ', () => {
		const user = {
			referer : {
				env : 'ei'
			}
		};
		const environment = 'ei';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isEnvironment user.environment = EI, expected = ei ', () => {
		const user = {
			referer : {
				env : 'EI'
			}
		};
		const environment = 'ei';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isEnvironment user.environment = ei, expected = EI ', () => {
		const user = {
			referer : {
				env : 'ei'
			}
		};
		const environment = 'EI';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isEnvironment user.environment = Ei, expected = ei ', () => {
		const user = {
			referer : {
				env : 'Ei'
			}
		};
		const environment = 'ei';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isEnvironment user.environment = ei, expected = Ei ', () => {
		const user = {
			referer : {
				env : 'ei'
			}
		};
		const environment = 'Ei';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isEnvironment user.environment = ei, expected = qa ', () => {
		const user = {
			referer : {
				env : 'ei'
			}
		};
		const environment = 'qa';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEnvironment user.environment = qa, expected = ei ', () => {
		const user = {
			referer : {
				env : 'qa'
			}
		};
		const environment = 'ei';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEnvironment user.environment = ei, expected = ei,qa ', () => {
		const user = {
			referer : {
				env : 'ei'
			}
		};
		const environment = 'ei,qa';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isEnvironment user.environment = qa, expected = ei,qa ', () => {
		const user = {
			referer : {
				env : 'qa'
			}
		};
		const environment = 'ei,qa';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isEnvironment user.environment = aa, expected = ei,qa ', () => {
		const user = {
			referer : {
				env : 'aa'
			}
		};
		const environment = 'ei,qa';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEnvironment user = null, expected = ei,qa ', () => {
		const user = null;
		const environment = 'ei,qa';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEnvironment user.environment = null, expected = ei,qa ', () => {
		const user = {
			referer : {
				env : null
			}
		};
		const environment = 'ei,qa';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEnvironment user.environment = undefined, expected = ei,qa ', () => {
		const user = {
			referer : {
				env : undefined
			}
		};
		const environment = 'ei,qa';
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEnvironment user.environment = ei, expected = null ', () => {
		const user = {
			referer : {
				env : 'ei'
			}
		};
		const environment = null;
		const result = conditions.isEnvironment(user, environment);

		expect(result).to.be.eql(false);
	});
});

// TEST PARA CONDITION isEmployee
describe('TEST CONDITIONS - isEmployee():', () => {
	it('Test para funcion isEmployee user.isEmployee = true, expected = true ', () => {
		const user = {
			isEmployee : true
		};
		const employee = true;
		const result = conditions.isEmployee(user, employee);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isEmployee user.isEmployee = true, expected = false ', () => {
		const user = {
			isEmployee : true
		};
		const employee = false;
		const result = conditions.isEmployee(user, employee);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEmployee user.isEmployee = false, expected = true ', () => {
		const user = {
			isEmployee : false
		};
		const employee = true;
		const result = conditions.isEmployee(user, employee);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEmployee user = null, expected = true ', () => {
		const user = null;
		const employee = true;
		const result = conditions.isEmployee(user, employee);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEmployee user.isEmployee = null, expected = true ', () => {
		const user = {
			isEmployee : null
		};
		const employee = true;
		const result = conditions.isEmployee(user, employee);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEmployee user.isEmployee = undefined, expected = true ', () => {
		const user = {
			isEmployee : undefined
		};
		const employee = true;
		const result = conditions.isEmployee(user, employee);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEmployee user.isEmployee = true, expected = null ', () => {
		const user = {
			isEmployee : true
		};
		const employee = null;
		const result = conditions.isEmployee(user, employee);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isEmployee user.isEmployee = false, expected = null ', () => {
		const user = {
			isEmployee : false
		};
		const employee = null;
		const result = conditions.isEmployee(user, employee);

		expect(result).to.be.eql(false);
	});
});

// TEST PARA CONDITION isLang
describe('TEST CONDITIONS - isLang():', () => {
	it('Test para funcion isLang user.lang = "spa", expected = true ', () => {
		const user = {
			lang : 'spa'
		};
		const lang = 'spa';
		const result = conditions.isLang(user, lang);

		expect(result).to.be.eql(true);
	});
	it('Test para funcion isLang user.isLang = "spa", expected = false ', () => {
		const user = {
			lang : 'spa'
		};
		const lang = 'eng';
		const result = conditions.isLang(user, lang);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isLang user.isLang = "eng", expected = false ', () => {
		const user = {
			lang : 'eng'
		};
		const lang = 'spa';
		const result = conditions.isLang(user, lang);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isLang user.isLang = null, expected = false ', () => {
		const user = {
			lang : null
		};
		const lang = 'spa';
		const result = conditions.isLang(user, lang);

		expect(result).to.be.eql(false);
	});
	it('Test para funcion isLang user.isLang = undefined, expected = false ', () => {
		const user = {
			lang : undefined
		};
		const lang = 'spa';
		const result = conditions.isLang(user, lang);

		expect(result).to.be.eql(false);
	});
});
