/// <reference types="cypress" />

describe('Acessar URL', () => {
    beforeEach(() => {
      cy.visit('https://buger-eats-qa.vercel.app/')
    })
  
    it('Acessar CEP', () => {
        cy.get('a[href="/deliver"]').click()
        cy.get('input[name="postalcode"]').type("88117430")
        cy.fixture('mockCEP').then((mockCEP)=>{
            cy.intercept('GET','https://viacep.com.br/ws/**',{
                statusCode: 200,
                body:mockCEP

            }).as('MockCEPaula')

        })
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.wait('@MockCEPaula')
     
    })



    
  
  })