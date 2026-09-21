export class Header {
  constructor(page) {
    this.page = page;

    //Locators
    this.signInButton = page.getByRole("button", { name: "Account" });
    this.signOutButton = page.getByRole("button", { name: "Sign out" });
    this.cartButton = page.getByRole("link", { name: "Cart", exact: true });
    this.cartCount = page.locator(".h-5.absolute");
  }

  async goToLogin() {
    this.signInButton.click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}
