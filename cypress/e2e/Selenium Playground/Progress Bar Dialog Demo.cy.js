context ('Progress bar demo', () => {
    beforeEach( () =>{
      cy.visit ('https://www.lambdatest.com/selenium-playground/bootstrap-progress-bar-dialog-demo')
    })
    it ('visited correct page', ()=>{
      cy.get('.text-size-48').should('exist');
      cy.get('.text-size-48').should('contain','Bootstrap Progress Bar Dialog Demo')
      
    })
    it ('Click, show bar dialog, confirm that bar disappears after 3sec',()=>{
      cy.get('[class="btn btn-primary mt-20 mb-30"]').click()
      //confirm it's visible after click
      cy.get('.progress-bar').should('be.visible')
      //confirm it contains Loading
      cy.get('.modal-header').should('contain', 'Loading')
      //cy.get('.modal backdrop fade show').should("be.visible")
      cy.wait(3500)
      //confirm it disappears
      cy.get('.progress-bar').should('not.be.visible')
      
    })
    // other buttons are just variable of this, eg longer wait, and different text, won't do for now
})