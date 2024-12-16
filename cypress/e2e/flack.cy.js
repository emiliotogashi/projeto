/// <reference types="cypress" />
import {faker} from '@faker-js/faker'

describe('Flaky test', () => {
   
    beforeEach(() => {
      cy.intercept('GET','**/search**').as('getStories')

      cy.visit('https://wlsf82-hacker-stories.web.app')

      cy.wait('@getStories')
    })


    Cypress._.times(4, () => {
      it('Mostra máximo 5 botões para os ultimos pesquisados',()=>{
        Cypress._.times(6, () => {
          cy.search(faker.random.word())     
       })

       cy.get('.last-searches button').should('have.length',5)

      })

    })
 
  })