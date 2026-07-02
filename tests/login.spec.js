const { test, expect } = require('../fixtures/baseFixture');
const userData = require('../test-data/userData');

test('Complete Shopping Flow', async ({
    page,
    loginPage,
    productsPage,
    cartPage,
    checkoutPage
}) => {

    // Open Website
    await loginPage.openWebsite();

    // Login
    await loginPage.login(
        userData.username,
        userData.password
    );

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    // Add product to cart
    await productsPage.addBackpackToCart();

    // Verify cart badge count
    await expect(page.locator('.shopping_cart_badge'))
        .toHaveText('1');

    // Open cart
    await productsPage.openCart();

    // Verify product in cart
    await cartPage.verifyProduct('Sauce Labs Backpack');

    // Click Checkout
    await cartPage.clickCheckout();

    // Enter customer details
    await checkoutPage.enterCustomerDetails(
        userData.firstName,
        userData.lastName,
        userData.postalCode
    );

    // Continue Checkout
    await checkoutPage.continueCheckout();

    // Finish Order
    await checkoutPage.finishOrder();

    // Verify successful order
    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');

});