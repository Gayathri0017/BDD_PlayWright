const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json', // Path to the JSON result
    output: 'reports/cucumber_report.html',   // Desired HTML report path
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome",
        "Platform": "Windows 10",
        "Executed": "Jenkins"
    }
};

reporter.generate(options);
