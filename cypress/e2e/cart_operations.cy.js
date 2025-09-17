import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import orderDetails from '../fixtures/orderDetails.json';

describe('Cart operations tests', () => {
  it('Add product to cart and verify in cart', () => {
    const home = new HomePage();
    const products = new ProductsPage();
    const cart = new CartPage();

    home.visit('/');
    home.clickProducts();
    products.selectProductByName(orderDetails.singleProductOrder.productName);
    products.addToCart();

    // talvez aparece modal, fechar ou continuar
    products.viewCart();
    cart.verifyProductInCart(orderDetails.singleProductOrder.productName);
  });
});
