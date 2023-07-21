
describe ('checkbox demo test', ()=>{
    beforeEach (()=>{

        cy.visit ('https://www.lambdatest.com/selenium-playground/checkbox-demo')
    })

    it ('test  single checkbox checked state', ()=>{

        cy.get('#isAgeSelected').check().should('be.checked')
        cy.get('#txtAge').should('exist')

    })

    it ('test  single checkbox unchecked state', ()=>{

        cy.get('#isAgeSelected').uncheck().should('not.be.checked')
        
    })

    it ('test disabled checkbox', ()=>{

        cy.get(':nth-child(2) > :nth-child(1) > .mr-10').check().should('be.checked')
        cy.get(':nth-child(2) > :nth-child(2) > .mr-10').should('not.be.checked')
        cy.get(':nth-child(2) > :nth-child(2) > .mr-10').check().should('be.checked')

    })  
})