class BasePage {
  visit(path = '') {
    cy.visit(path);
  }
}

export default BasePage;
