const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // module.exports = (on, config) => {
      //   require('cypress-mochawesome-reporter/plugin')(on);
      // };
    },
  },
  env: {
    env: "QA"
  },
  reporter: "mochawesome",
  reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      html: true,
      json: false,
      overwrite: true,
      reportPageTitle: "My Test Suite",
      reportFilename: "report",
      inlineAssets: true
  },
  screenshotsFolder: "cypress/reports/mochareports/assets",
  video: false,
  videosFolder: "cypress/vidoes",
  defaultCommandTimeout: 10000
});
