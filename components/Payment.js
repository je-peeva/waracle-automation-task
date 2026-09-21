import { PLACEHOLDERS } from "../tests/fixtures/constants/input-placeholders.js";

export class Payment {
  constructor(page) {
    this.page = page;

    this.cardNumberInput = page.getByPlaceholder(PLACEHOLDERS.cardNumber);
    this.expiryDateInput = page.getByPlaceholder(PLACEHOLDERS.expiryDate);
    this.cvcInput = page.getByPlaceholder(PLACEHOLDERS.cvc);
    this.payButton = page.getByRole("button", { name: "Pay £" });
  }

  async setCardNumber(cardNumber) {
    await this.cardNumberInput.fill(cardNumber);
  }

  async setExpiryDate(date) {
    await this.expiryDateInput.fill(date);
  }

  async setCvc(cvc) {
    await this.cvcInput.fill(cvc);
  }

  async setPaymentDetails(cardNumber, date, cvc) {
    await this.setCardNumber(cardNumber);
    await this.setExpiryDate(date);
    await this.setCvc(cvc);
  }

  async clickPayButton() {
    await this.payButton.click();
  }
}
