class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.successMessage = '.complete-header';
    }

    async enterCustomerDetails(firstName, lastName, postalCode) {

        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
        await this.page.locator(this.postalCode).fill(postalCode);

    }

    async continueCheckout() {

        await this.page.locator(this.continueButton).click();

    }

    async finishOrder() {

        await this.page.locator(this.finishButton).click();

    }

}

module.exports = CheckoutPage;