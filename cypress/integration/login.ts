import { LoginPage } from "../pages/login_page"


beforeEach(() => {
    cy.log('I am runing from outside describe block')
})

describe('all login tests', function () {

    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.navigate('https://trytestingthis.netlify.app/');
    })

    it.only('login with valid credentials', function () {

        loginPage.enterUsername('test');
        loginPage.enterPassword('test');
        loginPage.clickLogin();
        cy.contains('Login Successful')
       // cy.contains('here').click()
       cy.clickLink('here')
    })

    it('login with invalid username', function () {

        loginPage.enterUsername('test123');
        loginPage.enterPassword('test');
        loginPage.clickLogin();
        cy.on('window:alert', (txt) => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })

    })

    it('login with invalid password', function () {
        loginPage.enterUsername('test');
        loginPage.enterPassword('test321');
        loginPage.clickLogin();
        cy.on('window:alert', (txt) => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[ondblclick="myFunction()"]').click();
        cy.get('[ondblclick="myFunction()"]').click();
        cy.get('[name="option3"]').check();
        cy.get('form > fieldset').click();
        cy.get('[name="option1"]').check();
        cy.get('.pop-up-alert > button').click();
        /* ==== End Cypress Studio ==== */
    })
})

