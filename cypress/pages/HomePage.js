class HomePage{
    visit(){
        cy.visit('https://bstackdemo.com/')
    }

    clickSignIn(){
        cy.get('#signin').click()
    }

}

export default HomePage;