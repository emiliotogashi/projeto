/// <reference types="cypress" />

describe('Codigo Duplicado', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**'
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')

        cy.get('input[type="text"]')
        .should('be.visible')
        .as('ProcuraCampo')
        .and('have.value','redux')
        .clear()
    });

    const procurarpor=['frontend Testing','reactjs','vuejs']
    procurarpor.forEach(item=>{
        it(`Buscar por "${item}"`, () => {
            cy.search(item)
            cy.wait('@getStories')
            
            cy.get('.table-row')
                .should('have.length',100)
            
        });
    })

    
});