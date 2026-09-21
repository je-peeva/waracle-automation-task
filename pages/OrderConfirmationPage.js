import { OrderSummary } from "../components/OrderSummary.js";

export class OrderConfirmationPage {
  constructor(page) {
    this.page = page;
    this.url = "/order-success/";

    this.orderConfirmationHeading = page.locator("div>h1");
    this.orderSummary = new OrderSummary(page);
  }
}
