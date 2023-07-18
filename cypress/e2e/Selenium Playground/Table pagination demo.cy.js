

context ('table pagination demo', () => {
    beforeEach( () =>{
      cy.visit ('https://www.lambdatest.com/selenium-playground/table-pagination-demo')
    })
    it ('visited correct page', ()=>{
      cy.get('.text-size-48').should('exist');
      cy.get('.text-size-48').should('contain','Table Pagination Demo')
      
    })
    it ('paginates',()=>{
      //confirm it is on default pagination 5
      
        
        cy.get('tbody > :nth-child(5) > :nth-child(1)').should('be.visible')
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('not.be.visible')
      //change pagination to 10  and confirm it's 10
        cy.get('#maxRows').select("10")
        cy.get('tbody > :nth-child(5) > :nth-child(1)').should('be.visible')
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('be.visible')
      //change pagination to show all and confirm it shows all 
        cy.get('#maxRows').select("5000")
        cy.get('tbody > :nth-child(5) > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(40) > :nth-child(1)').should('be.visible')
        
    })

})