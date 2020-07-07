describe('back and fwd button simulate', ()=>{

    it('back-fwd test', ()=>{

        cy.visit('https://www.freshworks.com/');
       
        cy.contains('Platform').click()
        cy.go('back',{timeout:5000})
        // cy.go(-1)
        cy.wait(200)
        cy.go('forward')
        //cy.go(1)


        
    })
})