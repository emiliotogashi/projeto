/// <reference types="cypress" />

describe('Versionamento', () => {
    beforeEach(() => {
        cy.visit('https://notes-serverless-app.com/login')
    });
    it('Nao usar enviar dados sensiveis', () => {

        cy.get('#email').type(Cypress.env('user_email'))
        cy.get('#password').type(Cypress.env('user_senha'),{log:false})
        
    });
});