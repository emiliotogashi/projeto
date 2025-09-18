import 'cypress-file-upload';
// comandos customizados
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', (email, password) => {
  const home = new HomePage();
  const login = new LoginPage();
  home.visit();
  home.clickSignupLogin();
  login.fillLoginEmail(email);
  login.fillLoginPassword(password);
  login.submitLogin();
  // Simula login no front para exibir o link Logout
  cy.window().then((win) => {
    if (typeof win.simulateLogin === 'function') {
      win.simulateLogin();
    }
  });
});

Cypress.Commands.add('logout', () => {
  // assume after login, existe um botão "Logout"
  cy.get('a[href="/logout"]').click();
});
