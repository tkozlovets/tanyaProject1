import user from '../fixtures/user.json'
import LoginPage from "../support/pages/LoginPage";
import AccountPage from "../support/pages/AccountPage";

describe('Authorization positive scenarios', () => {
    it('Authorization', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields(user.loginname, user.password);

        cy.log('User first name should be displayed on page');
        AccountPage.getFirstNameText().should('contain', user.firstname);
    })
})

describe('Authorization negative scenarios', () => {

    it('Authorization without entered username', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields('', user.password);

        cy.log('Error should be displayed');
        LoginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided.');
    })


    it('Authorization without entered password', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields(user.loginname);

        cy.log('Error should be displayed');
        LoginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided.');
    })

    it('Authorization with empty fields', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields();

        cy.log('Error should be displayed');
        LoginPage.getErrorMessageText().should('contain', 'Incorrect login or password provided.');
    })
})