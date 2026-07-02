class CartPage {

    constructor(page) {

        this.page = page;

        this.productName = '.inventory_item_name';

        this.checkoutButton = '#checkout';

    }

    async verifyProduct(productName) {

        await this.page.locator(this.productName).waitFor();

        await this.page.locator(this.productName).textContent();

    }

    async clickCheckout() {

        await this.page.locator(this.checkoutButton).click();

    }

}

module.exports = CartPage;