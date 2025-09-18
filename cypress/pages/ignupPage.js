import BasePage from './BasePage';

class SignupPage extends BasePage {
  fillSignupName(name) {
    cy.get('input[data-qa="signup-name"]').type(name);
  }
  
  fillSignupEmail(email) {
    cy.get('input[data-qa="signup-email"]').type(email);
  }

  submitSignup() {
    cy.get('button[data-qa="signup-button"]').click();
  }

  // métodos para preencher formulário de conta, etc.
}

export default SignupPage;
