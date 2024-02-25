
import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'

import RegistrationPage from "../support/pages/RegistrationPage";
import LoginPage from "../support/pages/LoginPage";


user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'user.firstname', lastName: 'user.lastname', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });
user.loginname = faker.internet.userName();

describe('Register with valid data', () => {
  it('Registration', () => {
    cy.log('Open registration form');
    RegistrationPage.visit();
    // cy.visit('/');
    // cy.get('li:contains("Login or register")').click();
    // cy.get('button:contains("Continue")').click();

    cy.log('Fill in the fields Personal Details fields');
    // cy.get('#AccountFrm_firstname').type(user.firstname);
    RegistrationPage.getFirstNameField().type(user.firstname);

    // cy.get('#AccountFrm_lastname').type(user.lastname);
    RegistrationPage.getLastNameField().type(user.lastname);

    // cy.get('#AccountFrm_email').type(user.email);
    RegistrationPage.getEmailField().type(user.email);

    // cy.get('#AccountFrm_telephone').type(user.telephone);
    RegistrationPage.getTelephoneField().type(user.telephone);

    // cy.get('#AccountFrm_fax').type(user.fax);
    RegistrationPage.getFaxField().type(user.fax);

    cy.log('Fill in the Your Address fields');

    // cy.get('#AccountFrm_company').type(user.company);
    RegistrationPage.getCompanyField().type(user.company);

    // cy.get('#AccountFrm_address_1').type(user.address_1);
    RegistrationPage.getAddress1Field().type(user.address_1);

    // cy.get('#AccountFrm_address_2').type(user.address_2);
    RegistrationPage.getAddress2Field().type(user.address_2);

    // cy.get('#AccountFrm_city').type(user.city);
    RegistrationPage.getCityField().type(user.city);


    // cy.get('#AccountFrm_country_id').select(user.country);
    RegistrationPage.getCountryField().select(user.country);


    // cy.get('#AccountFrm_zone_id').select(user.zone_id);
    RegistrationPage.getZoneField().select(user.zone_id);

    // cy.get('#AccountFrm_postcode').type(user.postcode);
    RegistrationPage.getPostcodeField().type(user.postcode);

    cy.log('Fill in the Login Details fields');

    // cy.get('#AccountFrm_loginname').type(user.loginname);
    RegistrationPage.getLoginnameField().type(user.loginname);

    // cy.get('#AccountFrm_password').type(user.password);
    RegistrationPage.getPasswordField().type(user.password);

    // cy.get('#AccountFrm_confirm').type(user.password);
    RegistrationPage.getConfirmpasswordField().type(user.password);

    // cy.get('#AccountFrm_newsletter0').click();
    RegistrationPage.getNewsletterField().click();

    // cy.get('#AccountFrm_agree').click();
    RegistrationPage.getAgreeField().click();

    // cy.get('button:contains("Continue")').click();
    RegistrationPage.getContinueButton().click();


    RegistrationPage.getCreatedSuccessField().should('have.prop', 'textContent', ' Your Account Has Been Created!');
  })


  it('Authorization', ()=>{

  LoginPage.visit();
  LoginPage.fillLoginFields(user.loginname, user.password);

//     cy.log('Open authorization form');
//     cy.visit('/index.php?rt=account/login');
//
//     cy.log('Fill in authorization fields');
//     cy.get('#loginFrm_loginname').type(user.loginname);
//     cy.get('#loginFrm_password').type(user.password);
//     cy.get('[title="Login"]').click();
//
//     cy.log('User first name should display on page');
//     cy.get('.heading1 .subtext').should('contain', user.firstname)
  })
})