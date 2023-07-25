/*
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     // return require("./cypress/plugins/index.js")(on, config)
    }
  }
})
*/
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": false,
    setupNodeEvents(on, config) {
      const { isFileExist } = require('cy-verify-downloads');
      module.exports = (on, config) => {
      on('task', { isFileExist })
      }

      // implement node event listeners here
     // return require("./cypress/plugins/index.js")(on, config)
     // for download file
     const path = require('path')
    }
  }
})



