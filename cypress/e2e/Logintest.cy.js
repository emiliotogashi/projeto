import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

describe('Teste com Page Object', () => {
    const homePage= new HomePage();
    const loginPage= new LoginPage();

    it('Dev fazer login com sucesso', () => {
      homePage.visit();
      homePage.clickSignIn();
      loginPage.enterUserName('demouser');
      loginPage.enterPassword('testingisfun99');
      loginPage.submit();
      loginPage.VerificaLogado();
    });
});