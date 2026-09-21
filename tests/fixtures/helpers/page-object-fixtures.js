//pages
import { CartPage } from "../../../pages/CartPage.js";
import { CheckoutPage } from "../../../pages/CheckoutPage.js";
import { HomePage } from "../../../pages/HomePage.js";
import { LoginPage } from "../../../pages/LoginPage.js";
import { OrderConfirmationPage } from "../../../pages/OrderConfirmationPage.js";
import { ProductsPage } from "../../../pages/ProductsPage.js";
//components
import { Header } from "../../../components/Header.js";
import { Toasts } from "../../../components/Toasts.js";

//pages
export const pageObjects = {
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  orderConfirmationPage: async ({ page }, use) => {
    const orderConfirmationPage = new OrderConfirmationPage(page);
    await use(orderConfirmationPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },

  //components
  header: async ({ page }, use) => {
    const header = new Header(page);
    await use(header);
  },

  toasts: async ({ page }, use) => {
    const toasts = new Toasts(page);
    await use(toasts);
  },
};
