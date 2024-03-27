const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "feuw5n",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  }
});
