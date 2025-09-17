import BasePage from './BasePage';

class ProductsPage extends BasePage {
  selectProductByName(name) {
    cy.get('.productinfo').contains(name).click();
  }

  addToCart() {
    cy.get('button').contains('Add to cart').click();
  }

  viewCart() {
    cy.get('a').contains('View Cart').click();
  }
}

export default ProductsPage;
