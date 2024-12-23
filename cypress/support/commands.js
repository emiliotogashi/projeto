Cypress.Commands.add('search',term=>{
 cy.get('input[type="text"]').should('be.visible')
 .clear()
 .type(`${term}{enter}`)
})

Cypress.Commands.add('login',(username,password)=>{
    cy.get('#username').click()

    cy.get('.css-26l3qy-menu')
    .contains(username)
    .click();

    cy.get('#password').click()

    cy.get('.css-26l3qy-menu')
    .contains(password)
    .click();

    cy.get('#login-btn').click();

})

Cypress.Commands.add('VerificaLogado',()=>{
    cy.get('#logout').should('be.visible');
})

