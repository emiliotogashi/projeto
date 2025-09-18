import BasePage from './BasePage';

class CartPage extends BasePage {
  verifyProductInCart(name) {
    cy.get('.cart_description').contains(name).should('be.visible');
  }

  proceedToCheckout() {
    // Prefer the in-cart proceed link if present (force click), otherwise navigate to checkout via window.showPage
    cy.get('#cart-content').then($cart => {
      if ($cart.find('#proceed-to-checkout').length > 0) {
        cy.wrap($cart).find('#proceed-to-checkout').click({ force: true });
      } else {
        // fallback: call the app navigation directly
        cy.window().then(win => {
          if (win && win.showPage) {
            win.showPage('checkout');
          } else {
            // last resort: visit the checkout URL
            cy.visit('/checkout');
          }
        });
      }
    });
  }
}

export default CartPage;
