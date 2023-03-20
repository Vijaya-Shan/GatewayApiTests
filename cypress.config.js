const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
  

  auth0_clientID_admin: '396ead38f4a3173', 
  auth0_clientSecret_admin: "4ecf040c415968cee261ee42ba9ce330b43618f4d97ccadd7b",
  auth0_clientID_hdrcustodian: "3439fe9cfe7fe3c",
  auth0_clientSecret_hdrcustodian:"1055c0430738562b25a13d8f16c888edf5f413c7eafa55e536",
  auth0_clientID_applicant: "7f1d5301a70b18f",
  auth0_clientSecret_applicant: "39b0a1a1b695ecd5dd15e02586655d71ea95cceeb0b5105c45",
  },
  e2e: {
    setupNodeEvents(on, config) {  
      // implement node event listeners here
    },
  }
});
