import BasePage from './BasePage';

class CheckoutPage extends BasePage {
  fillAddressDetails({ name, address, city, state, zip, country, mobile }) {
    cy.get('input[name="checkout_name"]').clear().type(name);
    cy.get('input[name="address1"]').clear().type(address);
    cy.get('input[name="city"]').clear().type(city);
    cy.get('input[name="state"]').clear().type(state);
    cy.get('input[name="zipcode"]').clear().type(zip);
    cy.get('select[name="country"]').select(country);
    cy.get('input[name="mobile_number"]').clear().type(mobile);
  }

  placeOrder() {
    cy.get('button').contains('Place Order').click();
  }

  orderPlacedMessageVisible() {
    return cy.contains('Your order has been placed!').should('be.visible');
  }
}

export default CheckoutPage;
