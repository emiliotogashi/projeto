/// <reference types="cypress" />

describe('Usar Mockado', () => {

    beforeEach(() => {
        cy.visit('https://buger-eats-qa.vercel.app/')
    });
    it('Mapeamento dos campos', () => {

        cy.get('a[href="/deliver"]').click()
        cy.get('input[name="postalcode"]').type('88117460')
        cy.fixture('MockCep').then((MockCep)=>{
            cy.intercept('GET','https://viacep.com.br/ws/**',{
                statusCode:200,
                body:MockCep

            }).as('MockCepAula')

        })
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.wait('@MockCepAula')
    });
});