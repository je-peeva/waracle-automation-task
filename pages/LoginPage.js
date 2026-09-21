export class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = "/login";

    //Locators
    this.loginPageHeading = page.locator("div>h2");
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.signInButton = page.getByRole("button", { name: "Sign In" });
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async setEmail(email) {
    await this.emailInput.fill(email);
  }

  async setPassword(password) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.signInButton.click();
  }

  async login(email, password) {
    await this.setEmail(email);
    await this.setPassword(password);
    await this.submit();
  }
}
