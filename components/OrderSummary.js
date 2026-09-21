export class OrderSummary {
  constructor(page) {
    this.page = page;

    //Locators
    this.couponInput = page.getByRole("textbox", { name: "e.g. WARACLE25" });
    this.applyButton = page.getByRole("button", { name: "Apply" });
    this.appliedCouponMessage = page.locator("p.text-xs.text-obsidian");
    this.couponRow = page.locator("div.text-obsidian");
    this.couponName = this.couponRow.locator("span").nth(0);
    this.couponDiscount = this.couponRow.locator("span").nth(1);
    this.totalRow = page
      .locator(".flex.justify-between.border-t")
      .filter({ hasText: "Total" });
    this.totalAmount = this.totalRow.locator("span").nth(1);
    this.totalPaid = page
      .locator("div.grid.grid-cols-3 > div")
      .filter({ hasText: "Total Paid" })
      .locator("p")
      .nth(1);
    this.checkoutButton = page.getByRole("button", {
      name: "Proceed to Checkout",
    });
    this.continueShoppingButton = page.getByRole("link", {
      name: "Continue shopping",
    });
  }

  async enterCouponCode(coupunCode) {
    await this.couponInput.fill(coupunCode);
  }

  async clickApplyCouponButton() {
    await this.applyButton.click();
  }

  async setCoupon(couponCode) {
    await this.enterCouponCode(couponCode);
    await this.clickApplyCouponButton();
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }

  async clickContinueShoppingButton() {
    await this.continueShoppingButton.click();
  }

  async getTotalAmountNumber() {
    const total = await this.totalAmount.innerText();

    return Number(total.replace("£", ""));
  }

  async getTotalPaidNumber() {
    const totalPaid = await this.totalPaid.innerText();
    return Number(totalPaid.replace("£", ""));
  }
}
