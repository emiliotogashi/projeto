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

    const procurarpor=['reactjs','vuejs']
    procurarpor.forEach(item=>{
        it(`Buscar por "${item}"`, () => {
            cy.search(item)
          
            cy.wait('@getStories').then(({response})=>{
              const quantidade =response.body.hits.length

              cy.get('.table-row')
                .should('have.length',quantidade)
   
            })
            
           
        });
    })

       

      it.skip('Busca por mal uso "reactjs"', () => {
    cy.get('@searchField')
      .type('reactjs{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })

        it.skip('Busca por mal uso "reactjs"', () => {
    cy.get('@searchField')
      .type('reactjs{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })

  it.skip('Busca por mal uso "vuejs"', () => {
    cy.get('@searchField')
      .type('vuejs{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })
   
});