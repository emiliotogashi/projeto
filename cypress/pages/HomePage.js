import BasePage from './BasePage';

class HomePage extends BasePage {
  constructor() {
    super();
  }

  clickSignupLogin() {
    cy.get('a[href="/login"]').click();
  }

  clickContactUs() {
    cy.get('a[href="/contact_us"]').click();
  }

  clickProducts() {
    cy.get('a[href="/products"]').click();
  }

  isHomePageVisible() {
    // elemento que identifica página inicial
    return cy.get('body').contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
  }
}

export default HomePage;
