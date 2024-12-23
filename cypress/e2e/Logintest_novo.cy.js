/// <reference types="cypress" />

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://bstackdemo.com/');
    });
    it('Deve fazer login com sucesso', () => {

        cy.get('#signin').click();

        cy.login(Cypress.env('user_name'),Cypress.env('user_password'));

        cy.VerificaLogado();
        
    });
});