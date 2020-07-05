describe('dropdown feature', ()=>{

    it.skip('with select tag test', ()=>{

    cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
    cy.get('#Form_submitForm_Country')
    .select('India')
    .should('have.value','India')

    cy.get('#Form_submitForm_Industry')
    .select('Automotive')
    .should('have.value','Automotive')
        
    })


    it.skip('google search test', ()=>{

        cy.visit('https://www.google.com')
        cy.get("[name='q']").type('cypress')

        // cy.get('.erkvQe')
        // .find('li span').contains('cypress hill').click()

        //or

        cy.get('.erkvQe li span').contains('cypress hill').click()
        

        })

        it('automation ecommerce website search test', ()=>{

            cy.visit('http://automationpractice.com/index.php')
            cy.get('#search_query_top').type('dress')
    
            cy.get('.ac_results')
            .find('li').contains('T-shirts').click()
    
            })
})