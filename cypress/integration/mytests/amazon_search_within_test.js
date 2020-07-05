describe('amazon search app', ()=>{

    it('search test', ()=>{

        cy.visit('https://www.amazon.in/');
       
        cy.get('.nav-search-field ').within(()=>{
            cy.get('#twotabsearchtextbox').type('Apple Mac Book laptop')
        })
        
    })
})