const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://the-internet.herokuapp.com/",
    specPattern: "cypress/e2e/*.spec.js"
  },

  watchForFileChanges: false,
});
