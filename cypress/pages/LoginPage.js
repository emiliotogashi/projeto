import BasePage from './BasePage';

class LoginPage extends BasePage {
  fillLoginEmail(email) {
    cy.get('input[data-qa="login-email"]').type(email);
  }

  fillLoginPassword(password) {
    cy.get('input[data-qa="login-password"]').type(password);
  }

  submitLogin() {
    cy.get('button[data-qa="login-button"]').click();
  }

  isLoggedIn() {
    // por exemplo verificar se existe “Logged in as <username>”
    return cy.get('a').contains('Logout').should('be.visible');
  }
}

export default LoginPage;
