import { ShippingAddress } from "../components/ShippingAddress.js";
import { Payment } from "../components/Payment.js";
import { OrderSummary } from "../components/OrderSummary.js";

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.url = "/checkout";

    this.shippingAddress = new ShippingAddress(page);
    this.paymentDetails = new Payment(page);
    this.orderSummary = new OrderSummary(page);
  }
}
