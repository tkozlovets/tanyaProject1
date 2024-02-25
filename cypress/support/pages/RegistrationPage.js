import BasePage from "./BasePage";
import user from "../../fixtures/user.json";

class RegistrationPage extends BasePage {

    visit() {
        cy.log('Open registration form');
        cy.visit('/');
        cy.get('li:contains("Login or register")').click();
        cy.get('button:contains("Continue")').click();
    }

    getFirstNameField() {
        return cy.get('#AccountFrm_firstname');
    }

    getLastNameField() {
        return cy.get('#AccountFrm_lastname');
    }

    getEmailField() {
        return cy.get('#AccountFrm_email');
    }

    getTelephoneField() {
        return cy.get('#AccountFrm_telephone');
    }

    getFaxField() {
        return cy.get('#AccountFrm_fax');
    }

    getCompanyField() {
        return cy.get('#AccountFrm_company');
    }

    getAddress1Field() {
        return cy.get('#AccountFrm_address_1');
    }

    getAddress2Field() {
        return cy.get('#AccountFrm_address_2');
    }

    getCityField() {
        return cy.get('#AccountFrm_city');
    }

    getCountryField() {
        return cy.get('#AccountFrm_country_id');
    }

    getZoneField() {
        return cy.get('#AccountFrm_zone_id');
    }

    getPostcodeField() {
        return cy.get('#AccountFrm_postcode');
    }

    getLoginnameField() {
        return cy.get('#AccountFrm_loginname');
    }

    getPasswordField() {
        return cy.get('#AccountFrm_password');
    }

    getConfirmpasswordField() {
        return cy.get('#AccountFrm_confirm');
    }

    getNewsletterField() {
        return cy.get('#AccountFrm_newsletter0');
    }

    getAgreeField() {
        return cy.get('#AccountFrm_agree');
    }

    getContinueButton() {
        return cy.get('button:contains("Continue")');
    }

    getCreatedSuccessField() {
        return cy.get('.maintext');
    }

}

    export default new RegistrationPage()