// esse arquivo roda antes de cada spec
import './commands';

beforeEach(() => {
  // por exemplo, limpar cookies, local storage, etc.
  cy.clearCookies();
  cy.clearLocalStorage();
});
