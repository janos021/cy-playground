// https://www.browserstack.com/guide/how-to-test-redirect-with-cypress
describe( 'redirectdemo', ()=>{
    beforeEach ( ()=>{

        cy.visit('https://www.lambdatest.com/selenium-playground/redirection')    
        
    })

    it ('tests redirection', ()=>{
        cy.get('.text-size-16 > .text-lambda-900').click() // click on the link
        cy.url().should('be.equals', 'https://www.lambdatest.com/selenium-playground/') // confirm redirect url
        cy.title().should('include', 'Selenium Grid') // confirm redirect title
    })
    
})