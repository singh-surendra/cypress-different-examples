describe('hub spot page feature', ()=>{


    it('handle hub spot login test', ()=>{

        cy.visit('https://app.hubspot.com/login', {failOnStatusCode:false})
        cy.get('#username').type('surendra010191@gmail.com')
        cy.get('#password').type('Test@01')
        cy.get('#loginBtn').click()

    })



})