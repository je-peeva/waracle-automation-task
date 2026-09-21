import { OrderSummary } from "../components/OrderSummary.js";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.url = "/cart";

    //Locators
    this.cartPageHeading = page.locator("div>h1");
    this.orderSummary = new OrderSummary(page);
  }
}
