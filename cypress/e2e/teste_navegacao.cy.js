///<reference types="cypress"/>

describe('Pratica ruim de teste de navegador', () => {
    beforeEach(() => {
        cy.visit('/') 
    });

    it('Direciona para a pagina de Login', () => {
        cy.contains('.nav a', 'Login').click()

        cy.url().should('be.equal', 'https://notes-serverless-app.com/login')
        
    });

    it('Verificação da  href', () => {
        cy.contains('.nav a','Login').should('have.attr','href','/login').and('not.have.attr','target')
    });
});