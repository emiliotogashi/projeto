import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import users from '../fixtures/users.json';
import orderDetails from '../fixtures/orderDetails.json';

describe('Place order test', () => {
  it('Add product, login/register if needed, checkout and place order', () => {
    const home = new HomePage();
    const products = new ProductsPage();
    const cart = new CartPage();
    const checkout = new CheckoutPage();

    // gerar usuário novo
    const timestamp = Date.now();
    const uniqueEmail = `orderuser_${timestamp}@example.com`;

  home.visit('/');
  cy.get('#products-section'); // Garante que o elemento está presente
  home.clickProducts();
    products.selectProductByName(orderDetails.singleProductOrder.productName);
    products.addToCart();
    products.viewCart();

    // supondo que produto leva para checkout onde pede login ou register
    // Registrar usuário novo
    // (você precisaria implementar SignupPage + fluxo de preencher dados completos)
    // Também poderia usar cy.login se usuário já existe
    
    // Aqui estou assumindo login do usuario existente como simplificação
    cy.login(users.existingUser.email, users.existingUser.password);

    cart.proceedToCheckout();

    checkout.fillAddressDetails({
      name: 'Cliente Teste',
      address: 'Rua Teste, 123',
      city: 'Cidade Exemplo',
      state: 'Estado Exemplo',
      zip: '12345',
      country: 'United States',
      mobile: '5511999999999'
    });

    checkout.placeOrder();
    checkout.orderPlacedMessageVisible();
  });
});
