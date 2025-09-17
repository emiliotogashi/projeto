import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import { v4 as uuidv4 } from 'uuid';
import users from '../fixtures/users.json';

describe('Signup and Login tests', () => {
  it('Register new user and then delete account', () => {
    const home = new HomePage();
    const signup = new SignupPage();

    // gera email único para evitar conflito
    const timestamp = Date.now();
    const uniqueEmail = `${users.newUser.emailPrefix}_${timestamp}@example.com`;

    home.visit('/');
    home.clickSignupLogin();
    signup.fillSignupName(users.newUser.name);
    signup.fillSignupEmail(uniqueEmail);
    signup.submitSignup();

    // aqui continuar preenchendo dados adicionais do cadastro
    // verificar que conta foi criada
    // depois deletar conta (lembrando usar um fluxo que permite deletar)
  });

  it('Login with existing user then logout', () => {
    const home = new HomePage();
    const login = new LoginPage();

    home.visit('/');
    home.clickSignupLogin();
    cy.login(users.existingUser.email, users.existingUser.password);
    login.isLoggedIn();

    cy.logout();
    // verificar que voltou pra tela de login ou botão de login visível
    cy.get('a[href="/login"]').should('be.visible');
  });
});

