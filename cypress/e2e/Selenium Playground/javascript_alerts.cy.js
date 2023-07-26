
describe ('test js alerts', ()=>{
    beforeEach( () =>{
        cy.visit ('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
      })
    it ('confirms the correct header/title', ()=>{
        cy.get('.text-size-64').should('contain','Javascript Alert Box Demo')
        
    })
    it ('test js alert 1', ()=>{
        cy.contains('button', 'Click Me').first().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Alert box!')
            //expect(str).to.equal('Alerte') negative
          })
        })
    it ('test js confirm alert click ok', { scrollBehavior: false }, ()=>{
        cy.get('.ml-10 > .text-gray-900 > .btn').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            //expect(str).to.equal('Presser a button!') negative test
        //cypress will close the alert
        cy.get('#confirm-demo').should('exist').should('have.text', 'You pressed OK!')
        })
    })
    it('test js alert confirm click cancel', { scrollBehavior: false }, ()=>{
        cy.get('.ml-10 > .text-gray-900 > .btn').click()
        
        //click cancel
        cy.on('window:confirm',()=>(false))
        // confirm that cancel is pressed
        cy.get('#confirm-demo').should('exist').should('have.text','You pressed Cancel!')
    })
    it.only ('test js alert 3 prompt box', { scrollBehavior: false }, ()=>{
      // stub the entry
      cy.window().then((wind)=>{
        cy.stub(wind, 'prompt').returns('firstname')
      })
      // https://github.com/cypress-io/cypress/issues/4856
      cy.get(':nth-child(3) > .text-gray-900 > .btn' ).click({force: true})
      //default behavior is =  prompt closes automatically
         
      // validate that the string 'firstname' is displayed in the box
      cy.get('#prompt-demo').should('exist').should('have.text',"You have entered \'firstname\' !")
  })
})


