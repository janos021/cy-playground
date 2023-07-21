describe( 'redirectdemo', ()=>{
    beforeEach ( ()=>{

        cy.visit('https://www.lambdatest.com/selenium-playground/redirection')    
        
    })

    it ('tests redirection', ()=>{
        cy.get('.text-size-16 > .text-lambda-900').click()
        cy.url().should('be.equals', 'https://www.lambdatest.com/selenium-playground/')
        cy.title().should('include', 'Selenium Grid')
    })
    
})