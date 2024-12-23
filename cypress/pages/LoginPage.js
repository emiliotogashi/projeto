class LoginPage{

enterUserName(username){
    cy.get('#username').click()

    cy.get('.css-26l3qy-menu')
    .contains(username)
    .click();

}

enterPassword(password){
    cy.get('#password').click()

    cy.get('.css-26l3qy-menu')
    .contains(password)
    .click();

}

submit(){
    cy.get('#login-btn').click()
}

VerificaLogado(){
    cy.get('#logout').should('be.visible')
}
}
export default LoginPage;