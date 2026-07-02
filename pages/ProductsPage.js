class ProductsPage {

    constructor(page) {
        this.page = page;

        this.backpack = '#add-to-cart-sauce-labs-backpack';
        this.cartBadge = '.shopping_cart_badge';
        this.cartIcon = '.shopping_cart_link';
    }

    async addBackpackToCart() {
        await this.page.locator(this.backpack).click();
    }

    async verifyCartCount() {
        await this.page.locator(this.cartBadge).waitFor();
    }

    async openCart() {
        await this.page.locator(this.cartIcon).click();
    }

}

module.exports = ProductsPage;