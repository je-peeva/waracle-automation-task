import { ProductGrid } from "../components/ProductGrid.js";

export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.url = "/products";

    //Locators
    this.productHeading = page.locator("div>h1");
    this.productGrid = new ProductGrid(page);
  }
}
