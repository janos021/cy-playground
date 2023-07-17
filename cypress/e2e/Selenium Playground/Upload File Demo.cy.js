context ('simpleformdemo', () => {
    beforeEach( () =>{
      cy.visit ('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    })
    it ('visited correct page', ()=>{
      cy.get('.text-size-48').should('exist');
      cy.get('.text-size-48').should('contain','Upload File Demo')
      
    })
    it ('uploads file',()=>{
        cy.get('#file').selectFile('cypress/testfiles/uadd(19).pdf')
        cy.get('#error').should('contain','File Successfully Uploaded')
    })

})