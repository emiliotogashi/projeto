import BasePage from './BasePage';

class CartPage extends BasePage {
  verifyProductInCart(name) {
    cy.get('.cart_description').contains(name).should('be.visible');
  }

  proceedToCheckout() {
    cy.get('a').contains('Proceed To Checkout').click();
  }
}

export default CartPage;
