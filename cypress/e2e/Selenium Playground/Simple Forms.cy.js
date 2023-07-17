
//describe('template spec', () => {
//  it('passes', () => {
//    cy.visit('https://qa2.mydirectives.com')
//  })
//})

context ('simpleformdemo', () => {
    beforeEach( () =>{
      cy.visit ('https://www.lambdatest.com/selenium-playground/simple-form-demo')
    })
    it ('visited correct page', ()=>{
      cy.get('.text-size-48').should('exist');
      cy.get('.text-size-48').should('contain','Simple Form Demo')
      
    })
// escape chars \\
    it ('typed into form and confirmed form', ()=>{
      cy.get('.w-8\\/12 > #user-message').type('example123')
      cy.get('#showInput').click()
      cy.get('.pt-20 > .flex > .w-4\\/12').should('contain','example123')
    })
    //it ('enters two value and sums them', ()=> {
    //    cy.get('#sum1').type(100)
    //    cy.get('#sum2').type(200)
    //    cy.get('#gettotal > .bg-lambda-900').click()
    //    cy.get('#addmessage').should('have.text', '300')
    //})
    it('enters two values and sums them', () => {
        const value1 = '100';
        const value2 = '200';
      
        cy.get('#sum1').type(value1);
        cy.get('#sum2').type(value2);
        cy.get('#gettotal > .bg-lambda-900').click();
        cy.get('#addmessage').should('have.text', (parseInt(value1) + parseInt(value2)).toString());
      });
    })
  

 