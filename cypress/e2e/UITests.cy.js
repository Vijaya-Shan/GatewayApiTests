/// <reference types  = "cypress" />
let userToken =''
describe("Login tests",()=>{

it('Login as Applicant',()=>{

cy.request({
 method: "POST",
 url:"https://api.uat.healthdatagateway.org:443/oauth/token",
body: {
grant_type:"client_credentials",
client_id: Cypress.env("auth0_clientID_hdrcustodian"),
client_secret: Cypress.env("auth0_clientSecret_hdrcustodian")
}

}).then((response)=>{
cy.log(response.status)
userToken=response.body.access_token
            userToken= userToken.substring(7)
            cy.log(userToken)
            cy.setCookie('jwt',userToken)
            cy.visit("https://web.uat.healthdatagateway.org/search?search=&datasetSort=latest&tab=Datasets")
})

})

it("Check the menus",() =>{


})

});