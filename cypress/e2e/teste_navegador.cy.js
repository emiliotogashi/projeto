/// <reference types="cypress" />

describe('Prática ruim de teste de navegador - anchor href', () => {
    beforeEach(() => {
      cy.visit('https://notes-serverless-app.com')
    })
  
    it('direciona o usuário para a página de login ao clicar no link de login', () => {
      cy.contains('.nav a', 'Login').click()
  
      cy.url().should('be.equal', 'https://notes-serverless-app.com/login')
    })

    it('direciona o usuário para a página de login ao clicar no link de login', () => {
        cy.contains('.nav a', 'Login').should('have.attr','href','/login').and('not.have.attr','target')
    
      })

    
  
  })