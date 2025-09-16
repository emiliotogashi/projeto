///

// cypress/integration/testes.spec.js

describe('Testes de Acesso e Validação de Páginas', () => {

    // ---
    // Teste 1: Valida o formulário da página de Contato
    // Este teste é totalmente independente.
    // Ele não precisa que o Teste 2 tenha rodado antes.
    // ---
    it('Deve validar que o formulário de contato está visível', () => {
        // 1. O comando 'cy.visit()' garante que o navegador
        //    sempre comece da página inicial para este teste,
        //    isolando-o de qualquer estado anterior.
        cy.visit('https://www.automationexercise.com/');

        // 2. Navegar para a página de contato
        cy.get('a[href="/contact_us"]').click();

        // 3. Validar se a URL está correta
        cy.url().should('include', '/contact_us');

        // 4. Validar se o formulário e seus elementos estão visíveis
        cy.get('.contact-form').should('be.visible');
        cy.get('input[data-qa="name"]').should('be.visible');
        cy.get('input[data-qa="email"]').should('be.visible');
        cy.get('input[data-qa="subject"]').should('be.visible');
        cy.get('textarea[data-qa="message"]').should('be.visible');
        cy.get('input[data-qa="submit-button"]').should('be.visible');
    });

    // ---
    // Teste 2: Valida os campos da página de Login
    // Este teste também é totalmente independente.
    // Ele não depende do Teste 1.
    // ---
    it('Deve validar que os campos de login estão visíveis', () => {
        // 1. O comando 'cy.visit()' novamente garante que este teste
        //    comece em um estado limpo, sem resíduos do teste anterior.
        cy.visit('https://www.automationexercise.com/');
        
        // 2. Navegar para a página de login
        cy.get('a[href="/login"]').click();

        // 3. Validar se a URL está correta
        cy.url().should('include', '/login');

        // 4. Validar se os campos de login e senha estão visíveis
        cy.get('input[data-qa="login-email"]').should('be.visible');
        cy.get('input[data-qa="login-password"]').should('be.visible');
    });

});
