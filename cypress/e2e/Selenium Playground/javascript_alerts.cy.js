
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
    // it ('test js alert2 click ok', { scrollBehavior: false }, ()=>{
    //     cy.get('.ml-10 > .text-gray-900 > .btn').click()
    //     cy.on('window:alert', (str) => {
    //         expect(str).to.equal('Presseraaa a button!')
    //         //expect(str).to.equal('Presser a button!')
    //     //click OK
    //     //cy.get('.swal-button--confirm').click()
    //     //cy.get('.swal-button--cancel').click()
    //     //cy.get('#confirm-demo').should('exist').should('contain', 'You pressed Cancel!')
    //     })
    // })
    // it ('test js alert2 click cancel', { scrollBehavior: false }, ()=>{
    //     cy.get('.ml-10 > .text-gray-900 > .btn').click()
    //     cy.on('window:alert', (str) => {
    //         expect(str).to.equal('Press a button!')
    //         //expect(str).to.equal('Presser a button!')
    //     //click cancel
    //     //cy.get('.swal-button--confirm').click()
    //     cy.get('.swal-button--cancel').click()
    //     cy.get('#confirm-demo').should('exist').should('contain', 'You pressed Cancel!a')
    //     })
    // })
})

