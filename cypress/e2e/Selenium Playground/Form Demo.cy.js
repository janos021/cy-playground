context ('simpleformdemo', () => {
    beforeEach( () =>{
      
      cy.visit ('https://www.lambdatest.com/selenium-playground/input-form-demo')
    })
    it ('visited correct page', ()=>{
      cy.get('.text-size-48').should('exist');
      cy.get('.text-size-48').should('contain','Form Demo')
      
    })
    it ('fills form',()=>{
        cy.get('#name').type('firstname')
        cy.get('#inputEmail4').type('firstname@test.com')
        cy.get('#inputPassword4').type('P@ssword')
        cy.get('#company').type('company')
        cy.get('#websitename').type('websitename')
        cy.get(':nth-child(3) > .pr-20 > .w-full').select(3)
        cy.get('#inputCity').type('cityname')
        cy.get('#inputAddress1').type('adddress line1')
        cy.get('#inputAddress2').type('adddress line2')
        cy.get('#inputState').type('state')
        cy.get('#inputZip').type('12345')
        cy.get('.bg-lambda-900').click()
        cy.get('.success-msg').should('contain','Thanks for contacting us, we will get back to you shortly')
    })

})