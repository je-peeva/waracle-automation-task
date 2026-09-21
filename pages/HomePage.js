import { ProductGrid } from "../components/ProductGrid.js";

export class HomePage {
  constructor(page) {
    this.page = page;

    this.productGrid = new ProductGrid(page);
  }

  async navigate() {
    await this.page.goto("/");
  }
}
