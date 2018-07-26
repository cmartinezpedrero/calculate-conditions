# calculate-conditions

Return configuration nodes with 'isActive' node where value is true or false in function conditions properties

## Install

    npm install calculate-conditions


### Example

    const calculateConditions = require('calculate-conditions');

    // User example
       const user = {
            // UserAgent properties
            // Example appUserAgent:
            // F8C3150BDFF86F3B1A092761;Android;samsung;SM-G920F;1440x2560;Android;6.0.1;Android;6.0.1;appName;7.5;xxxhdpi

                uid : "F8C3150BDFF86F3B1A092761",
                platform : "Android",
                brand : "samsung",
                model : "SM-G920F,
                resolution : "1440x2560",
                os : "Android",
                osVersion : "6.0.1",
                app : "appName",
                appVersion : "7.5",
                screenDensity : "xxxhdpi",
                webviewVersion : "Chrome/58.0.3029.83"

            // Session and apps properties
                id = 000000001R;
                isEmployee = true;

            // Env properties
            // Example referer:
            // https://www.aaaaaa.com/qa/feature-DB-727-example/apps/appName1/index.html

                referer = {
                    domain : "www.aaaaaa.com",
                    env : "qa",
                    branch : "feature-DB-727-example",
                    path : "apps",
                    app : "appName1"
                };
                lang = "spa";
        };

    // Conditions example
        const "conditions": [
                  {"isEnvironment": "lh,ei,au,qa,qt", "minAppVersion": "6.6.0"}
               ]

        const "conditions": [
                  {"isEnvironment": "ei", "value": "initialMessageTitleEI"},
                  {"isEnvironment": "qa", "value": "initialMessageTitleQA"},
                  {"isEnvironment": "pr", "value": "initialMessageTitlePR"}
               ]

        const "conditions": [
                  {"isPlatform":"Android", "minOsVersion":"5.0", "minAppVersion": "4.9.0"},
                  {"isPlatform":"iPhone", "minOsVersion":"9.0", "minAppVersion": "4.9.0"}
               ]

    //every condition node:
    const evalCond = calculateConditions.calculateConditions(user, conditions);


    //RESULT: {"isActive": true/false}

### Conditions:

Conditions functions are configurable in conditions.js

Actual conditions:
* minAppVersion
* maxAppVersion
* minOsVersion
* maxOsVersion
* isPlatform
* isEnvironment
* isEmployee
* isLang
* isModel
* beginDateTime
* endDateTime
* isUpdatableWebView,
* isResolution,
* isScreenDensity

### License

Smart Assistants
