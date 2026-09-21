export class ProductGrid {
  constructor(page) {
    this.page = page;

    //Locators
    this.products = page.locator('a[href^="/products/"]');
  }

  getProduct(productName) {
    return this.products.filter({
      has: this.page.getByRole("heading", { name: productName }),
    });
  }

  async addProductToCart(productName) {
    const product = this.getProduct(productName);

    await product.getByRole("button", { name: "Add to cart" }).click();
  }

  async getProductPrice(productName) {
    const product = this.getProduct(productName);

    const price = await product.locator("p").innerText();
    return Number(price.replace("£", "").trim());
  }
}
