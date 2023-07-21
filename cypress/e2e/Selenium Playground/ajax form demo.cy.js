https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo
describe ('ajax form demo',()=>{
    beforeEach (()=>{
        cy.visit ('https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo')
    })
    it ('test validation border and message', ()=>{
        cy.get('#btn-submit').click()
        //label should exist and
        //cy.get(':nth-child(1) > label').should('exists')
        // should have red border border: 1px solid rgb(255, 0, 0)
        cy.get('#title').should('have.css', 'border', `1px solid rgb(255, 0, 0)`)
    })



    it ('fill form and confirm submit', ()=>{
        cy.get('#title').type('name')
        //.should('contain','name')
        cy.get('#description').type('message long')
        //.should('contain','message long')
        cy.get('#btn-submit').click()
        cy.get('#submit-control > img').should('exist')
        cy.get('#submit-control').should('exist')

    })
    
})