//describe('template spec', () => {
//  it('passes', () => {
//    cy.visit('https://qa2.mydirectives.com')
//  })
//})

context ('practice cypress', () => {
  beforeEach( () =>{
    cy.visit ('https://qa2.mydirectives.com')
  })
  it ('has mydirectives header', ()=>{
    cy.get('.normal-logo > a > img').should('exist');
    cy.get(':nth-child(7) > a').should('contain','Returning')
  })
})

