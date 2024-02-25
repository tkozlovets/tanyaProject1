// 1. Написати тест на оформлення замовлення з головної сторінки.
// 2. Написати хелпер функцію.
//
//     Функція приймає як аргумент назву товару.
//     Дії функції:
//
//     Виконати пошук на сайті (бажано шукати букву "E", щоб пошукова видача була велика,
//     бо на сайті мало товарів). Для даного прикладу текст для пошуку можна захардкодити,
//     бо він завжди буде однаковий.
//
//     Спробувати знайти на сторінці товар, назва которого передається у функцію.
//
//     Якщо товару на сторінці не має, перейти на наступну сторінку.
//
//     Виконувати переходи на наступну сторінку i пошук на сторінці до тих пір, поки товар не буде знайдений.
//
//     Якщо товар знайдений на сторінці, то клікнути на нього і перевірити що відкрилась сторінка з товаром.

import user from '../fixtures/user.json'
import {findProduct} from '../support/helper'

import LoginPage from "../support/pages/LoginPage";
import OrderPage from "../support/pages/OrderPage";


describe('Order suite', () => {
    it('Order from homepage', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields(user.loginname, user.password);

        OrderPage.getSearchInput().type('i').closest("form").submit();
        // cy.get('#filter_keyword')



        findProduct('Benefit Bella Bamba');

        // cy.get('.productpagecart').click()
        OrderPage.getAddToCartButton().click();

        // cy.get('#cart_checkout1').click()
        OrderPage.getCheckoutButton().click();


        // cy.get('#checkout_btn').click()
        OrderPage.getConfirmOrderButton().click();

        OrderPage.getContentPanel().should('contain', "Thank you for shopping with us!")
    })
})










