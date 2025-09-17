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
});

Cypress.Commands.add('logout', () => {
  // assume after login, existe um botão "Logout"
  cy.get('a[href="/logout"]').click();
});
