/// <reference types  = "cypress" />

let userToken =''
describe("Api test",()=>{

    it("GET api",() =>{
        cy.request("GET", "https://reqres.in/api/users?page=2").should( (response) =>{

        expect(response.status).to.eq(200);
        });
    
    });

    it("POST api",()=>{
        cy.request("POST", "https://reqres.in/api/users",{
        name: "Tom",
        job: "Leader"

        }).should((response)=>{
            expect(response.status).to.eq(201);

        });

    });

    it("PUT Api", ()=>{
        cy.request("PUT", "https://reqres.in/api/users/2",{
        name: "Unknown",
        job: "Terrorist"

        }).should((response)=>{
            expect(response.status).to.eq(200);

        });

    });

    it("DEL api",()=>{
        cy.request("DELETE","https://reqres.in/api/users/2").should((response)=>{
            expect(response.status).to.eq(204)
        });


    });


    it("Get I AM members",()=>{

        cy.request({

         method: "POST",
         url: "https://api.uat.healthdatagateway.org:443/oauth/token",
         body: {
               /* grant_type: "client_credentials",
                client_id: "3439fe9cfe7fe3c",
                client_secret: "1055c0430738562b25a13d8f16c888edf5f413c7eafa55e536" */
              
                grant_type: 'client_credentials',
            
                client_id: Cypress.env("auth0_clientID_hdrcustodian"),
                client_secret: Cypress.env("auth0_clientSecret_hdrcustodian")

               }
        }).then((response)=>{
            cy.log(response.body.access_token)
            

            cy.request({
                method: "GET",
                url: "https://api.uat2.healthdatagateway.org/api/v3/teams/5f7b1a2bce9f65e6ed83e7da/members",
                auth:{
                    //"bearer":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyMzQ5ZjVmNzY3ZGI1ZDM0MDhiNDAwNyIsImlkIjo0NTczOTIwOTk4NzY0NTIzLCJ0aW1lU3RhbXAiOjE2NzkwNTk1MDIzMjh9LCJpYXQiOjE2NzkwNTk1MDIsImV4cCI6MTY3OTA2MDQwMn0.97etWMXeYOI-YgzTKsPOH-C-SjOjgRB5JAqcSPrv_ZM"
                    "bearer": userToken      
                }
        
                }).then((response)=>{
                 cy.log((response.body.members[0].firstname))
                 expect(response.status).to.eq(200)
        
                })


         });

    

    })




});