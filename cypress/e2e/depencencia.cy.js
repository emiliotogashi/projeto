/// <reference types="cypress" />
describe('Dependencias de testes', () => {
    beforeEach(() => {
        cy.visit('http://notes-serverless-app.com')

        cy.get('.navbar-nav a:contains(Login)').click()
        cy.get('#email').type(Cypress.env('user_email'))
        cy.get('#password').type(Cypress.env('user_password'), {log:false})
        cy.get('button[type="submit"]').click()

        cy.contains('h1', 'Your Notes').should('be.visible')
    });

    it.only('Crud', () => {

        //Criar item
        cy.contains('Create a new note').click()
        cy.get('#content').type('Meu registro')
        cy.contains('Create').click()

        //Modificar item
        cy.get('.list-group').contains('Meu registro').click()
        cy.get('#content').type(' modificado')
        cy.contains('Save').click()

        cy.get('.list-group').should('contain', 'Meu registro modificado')

        //Deletar item
        cy.get('.list-group').contains('Meu registro modificado').click()
        cy.contains('Delete')

        cy.get('.list-group:contains(Meu registro modificado)').should('not.exist')
    });
    it('Criar', () => {
        cy.contains('Create a new note').click()
        cy.get('#content').type('Meu registro')
        cy.contains('Create').click()

        cy.get('.list-group').should('contain', 'Meu registro')
    });

    it('Editar', () => {
        cy.get('.list-group').contains('Meu registro').click()
        cy.get('#content').type(' modificado')
        cy.contains('Save').click()

        cy.get('.list-group').should('contain', 'Meu registro modificado')
        
    });

    it('Delete', () => {
        cy.get('.list-group').contains('Meu registro modificado').click()
        cy.contains('Delete')

        cy.get('.list-group:contains(Meu registro modificado)').should('not.exist')
    });
});