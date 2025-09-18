const mealEnum = Object.freeze({
  hot: 'prato quente',
  salad: 'salada',
  sandwich: 'sanduíche',
  soup: 'sopa'
})

const mealContainer = document.getElementById('meal-container')
const loading = document.getElementById('loading')
const mealName = document.getElementById('meal-name')
const ingredientsLabel = document.getElementById('ingredients-label')
const ingredientsList = document.getElementById('ingredients-list')
const generateMealButton = document.getElementById('generate-meal-button')
const mealTypeFilter = document.getElementById('meal-type-filter')
const searchField = document.getElementById('search-field')
const searchButton = document.querySelector('#search-container button[type="submit"]')

// eslint-disable-next-line no-undef
let filteredMeals = [...meals]

mealTypeFilter.addEventListener('change', e => {
  const selectedType = e.target.value
  if (selectedType === 'all') {
    // eslint-disable-next-line no-undef
    filteredMeals = [...meals]
    generateMeal()
  } else {
    // eslint-disable-next-line no-undef
    filteredMeals = meals.filter(meal => meal.type === selectedType)
    generateMeal()
  }
})

let searchedMeal

searchField.addEventListener('change', e => {
  searchedMeal = e.target.value.toLowerCase().trim()

  filteredMeals.forEach(filteredMeal => {
    if (filteredMeal.name.toLowerCase().includes(searchedMeal)) {
      const randomTimeoutBetweenZeroAndTenSeconds = Math.floor(Math.random() * 11) * 1000
      console.log(`${randomTimeoutBetweenZeroAndTenSeconds } milliseconds for meal to show.`)
      mealContainer.style.display = 'none'
      loading.style.display = 'block'
      setTimeout(() => {
        mealContainer.style.display = 'block'
        loading.style.display = 'none'
        showMealName(filteredMeal)
        showIngredients(filteredMeal.ingredients)
      }, randomTimeoutBetweenZeroAndTenSeconds)
    }
  })
})

searchButton.addEventListener('click', e => {
  e.preventDefault()
})

function generateMeal() {
  const randomMeal = filteredMeals[Math.floor(Math.random() * filteredMeals.length)]
  showMealName(randomMeal)
  showIngredients(randomMeal.ingredients)
  searchField.value = ''
}

function showMealName(meal) {
  mealName.innerHTML = `Refeição: ${meal.name} (${mealEnum[meal.type]})`
}

function showIngredients(ingredients) {
  ingredientsList.innerHTML = ''
  for (const ingredient of ingredients) {
    const listItem = document.createElement('li')
    ingredientsLabel.innerHTML = 'Ingredientes:'
    listItem.innerHTML = ingredient
    ingredientsList.appendChild(listItem)
  }
}
// Produtos simulados para testes Cypress
const products = [
  { name: 'Blue Top', price: 'R$ 50,00' },
  { name: 'Red Dress', price: 'R$ 120,00' },
  { name: 'Green Shirt', price: 'R$ 80,00' }
];

function renderProducts() {
  const productsList = document.getElementById('products-list');
  if (!productsList) return;
  productsList.innerHTML = '';
  products.forEach((product, idx) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'productinfo';
    const buttonId = idx === 0 ? 'subscribe' : `add-to-cart-${product.name.replace(/\s/g, '-').toLowerCase()}`;
    productDiv.innerHTML = `
      <span class="product-name">${product.name}</span>
      <span class="product-price">${product.price}</span>
      <button id="${buttonId}" class="btn btn-default" data-product="${product.name}">Add to cart</button>
    `;
    productsList.appendChild(productDiv);
    // attach a direct onclick handler so clicking the button always invokes addToCart
    const btn = document.getElementById(buttonId);
    if (btn) {
      btn.onclick = function (ev) {
        ev.preventDefault();
        try { addToCart(product.name); } catch (e) { console.error('addToCart failed', e); }
      };
    }
  });
}

generateMealButton.addEventListener('click', generateMeal)
// Simula ação de adicionar ao carrinho (apenas para teste visual)
document.addEventListener('click', function(e) {
  if (e.target && e.target.matches('button.btn.btn-default')) {
    const product = e.target.getAttribute('data-product');
    // adicionar ao carrinho interno e atualizar seção do carrinho
    addToCart(product);
  }
});

// Simulação simples de login/logout para exibir o link Logout
function showLogout(show) {
  const logoutLink = document.getElementById('scrollUp');
  if (logoutLink) logoutLink.style.display = show ? 'inline' : 'none';
}

// Exemplo: mostrar logout após 2 segundos (simulando login)
window.simulateLogin = function() {
  showLogout(true);
}
window.simulateLogout = function() {
  showLogout(false);
}

// Para o Cypress, expor funções globais para simular login/logout
window.onload = () => {
  generateMeal();
  renderProducts();
  showLogout(false);
}

generateMealButton.addEventListener('click', generateMeal);

// Simple client-side cart implementation for tests
const cart = [];

function addToCart(productName) {
  console.log('addToCart called with', productName);
  try {
    cart.push({ name: productName });
    // ensure the global proceed link is visible as soon as an item is added
    const pg = document.getElementById('proceed-global');
    if (pg) pg.style.display = 'inline';
    renderCart();
    console.log('cart now has', cart.length, 'items');
  } catch (e) {
    console.error('Error in addToCart', e);
  }
}

function renderCart() {
  const cartContent = document.getElementById('cart-content');
  if (!cartContent) return;
  cartContent.innerHTML = '';
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart_description';
    row.innerHTML = `<p class="product-name">${item.name}</p>`;
    cartContent.appendChild(row);
  });
  // add proceed to checkout link
  if (cart.length > 0) {
    const proceed = document.createElement('a');
    proceed.id = 'proceed-to-checkout';
    proceed.href = '/checkout';
    proceed.innerText = 'Proceed To Checkout';
    cartContent.appendChild(proceed);
    // also show global proceed link so tests can click it from any page
    const pg = document.getElementById('proceed-global');
    if (pg) pg.style.display = 'inline';
  }
  else {
    const pg = document.getElementById('proceed-global');
    if (pg) pg.style.display = 'none';
  }
}

// SPA navigation: show sections based on route
function showPage(page) {
  const pages = ['page-login','page-contact','page-products','page-cart'];
  pages.forEach(p => {
    const el = document.getElementById(p);
    if (el) el.style.display = 'none';
  });
  if (page === '/login' || page === 'login') document.getElementById('page-login').style.display = 'block';
  if (page === '/contact_us' || page === 'contact_us') document.getElementById('page-contact').style.display = 'block';
  if (page === '/products' || page === 'products') document.getElementById('page-products').style.display = 'block';
  if (page === '/view_cart' || page === 'view_cart') {
    document.getElementById('page-cart').style.display = 'block';
    // ensure cart is rendered when showing the cart page
    try { renderCart(); } catch (e) {}
  }
  if (page === '/checkout' || page === 'checkout') document.getElementById('page-checkout').style.display = 'block';
}

// Attach nav links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('href').replace(/^\/#?/, '');
      showPage(page);
      // update location without triggering a real navigation
      if (history.pushState) history.pushState(null, null, page);
    });
  });

  // handle contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const success = document.getElementById('contact-success');
      if (success) success.style.display = 'block';
    });
  }

  // expose a global function to navigate (used by tests via links)
  window.showPage = showPage;
  // on load, show main products section
  showPage('products');
});

// handle checkout button
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'proceed-to-checkout') {
    e.preventDefault();
    showPage('checkout');
  }
  if (e.target && e.target.id === 'place-order-button') {
    document.getElementById('order-success').style.display = 'block';
  }
  if (e.target && e.target.getAttribute && e.target.getAttribute('href') === '/logout') {
    e.preventDefault();
    showLogout(false);
    showPage('login');
  }
});

// capture uncaught errors to help debugging in tests
window.__lastClientError = null;
window.addEventListener('error', function (evt) {
  try {
    window.__lastClientError = { message: evt.message, filename: evt.filename, lineno: evt.lineno, colno: evt.colno, error: (evt.error && evt.error.stack) ? evt.error.stack : null };
    // also log to console so Cypress screenshot might capture it
    console.error('Captured client error', window.__lastClientError);
    // try to POST to server for debugging
    try {
      fetch('/__client_error', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(window.__lastClientError) }).catch(()=>{});
    } catch(e) {}
  } catch (e) {
    // noop
  }
});

