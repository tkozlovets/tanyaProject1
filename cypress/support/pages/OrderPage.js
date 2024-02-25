import BasePage from "./BasePage";
import RegistrationPage from "./RegistrationPage";
import user from "../../fixtures/user.json";


class OrderPage extends BasePage {

    getSearchInput() {
        return cy.get('#filter_keyword');
    }

    getAddToCartButton() {
        return cy.get('.productpagecart');
    }

    getCheckoutButton() {
        return cy.get('#cart_checkout1');
    }

    getConfirmOrderButton() {
        return cy.get('#checkout_btn');
    }

    getContentPanel() {
        return cy.get('.contentpanel');
    }
}

export default new OrderPage()