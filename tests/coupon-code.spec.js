import { test, expect } from "./fixtures/combined-fixtures.js";
import { CREDENTIALS } from "./fixtures/constants/credentials.js";
import { HEADINGS } from "./fixtures/constants/page-titles.js";
import { TOAST_MESSAGES } from "./fixtures/constants/toast-messages.js";
import { TEST_DATA } from "./fixtures/constants/test-data.js";

let couponDiscountValue;
let amountBeforeDiscount;
let amountAfterDiscount;

const loggedOutTestTitles = [
  "Apply a valid coupon before signing in",
  "Apply an invalid coupon before signing in",
  "Apply an empty coupon before signing in",
];

test.beforeEach(
  "Successful login",
  async ({ page, login, loginPage, headerUI }, testInfo) => {
    if (!loggedOutTestTitles.includes(testInfo.title)) {
      await login(CREDENTIALS.email, CREDENTIALS.password);

      await expect(page).toHaveURL(loginPage.url);
      await expect(loginPage.loginPageHeading).toHaveText(
        HEADINGS.loginPageTitle,
      );
      await headerUI.loggedInUI();
    }
  },
);

test("Apply a valid coupon after signing in", async ({
  page,
  cartPage,
  checkoutPage,
  orderConfirmationPage,
  toasts,
  addProductAndOpenCart,
}) => {
  await test.step("Apply a valid coupon on cart after signing in", async () => {
    await addProductAndOpenCart(TEST_DATA.productName1);

    await expect(page).toHaveURL(cartPage.url);
    await expect(cartPage.cartPageHeading).toHaveText(
      HEADINGS.fullCartPageTitle,
    );
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).toHaveCount(0);

    amountBeforeDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await cartPage.orderSummary.setCoupon(TEST_DATA.validCouponCode);

    expect(await toasts.getLatestToastMessage()).toBe(
      TOAST_MESSAGES.validCouponApplied,
    );

    await expect(cartPage.orderSummary.appliedCouponMessage).toHaveText(
      TEST_DATA.couponMessage,
    );

    await expect(cartPage.orderSummary.couponName).toHaveText(
      TEST_DATA.couponName,
    );

    await expect(cartPage.orderSummary.couponName).toHaveCount(1);

    await expect
      .poll(() => cartPage.orderSummary.getTotalAmountNumber())
      .not.toBe(amountBeforeDiscount);

    couponDiscountValue = Number(
      (amountBeforeDiscount * TEST_DATA.couponDiscount).toFixed(2),
    );
    amountAfterDiscount = amountBeforeDiscount - couponDiscountValue;

    //..bugs/coupon-code-bugs.md > Bug-001 (Discount amount is incorrectly calculated)
    await expect(cartPage.orderSummary.couponDiscount).toHaveText(
      "–£" + couponDiscountValue,
    );

    expect(await cartPage.orderSummary.getTotalAmountNumber()).toBe(
      amountAfterDiscount,
    );
  });

  await test.step("Validate coupon on Checkout", async () => {
    await cartPage.orderSummary.clickCheckoutButton();
    await expect(page).toHaveURL(checkoutPage.url);
    await expect(checkoutPage.orderSummary.couponName).toHaveText(
      TEST_DATA.couponName,
    );
    await expect(checkoutPage.orderSummary.couponName).toHaveCount(1);

    await expect(checkoutPage.orderSummary.couponDiscount).toHaveText(
      "–£" + couponDiscountValue,
    );

    expect(await checkoutPage.orderSummary.getTotalAmountNumber()).toBe(
      amountAfterDiscount,
    );
  });

  await test.step("Validate coupon on Confirmation", async () => {
    await checkoutPage.shippingAddress.setShippingAddress(
      TEST_DATA.shippingAddress,
      TEST_DATA.shippindCity,
      TEST_DATA.shippingPostcode,
    );

    await checkoutPage.paymentDetails.setPaymentDetails(
      TEST_DATA.cardNumber,
      TEST_DATA.expityDate,
      TEST_DATA.cvc,
    );

    await checkoutPage.paymentDetails.clickPayButton();
    await expect(page).toHaveURL(new RegExp(orderConfirmationPage.url));
    await expect(orderConfirmationPage.orderConfirmationHeading).toHaveText(
      HEADINGS.orderConfirmationPageTitle,
    );

    await expect(orderConfirmationPage.orderSummary.couponName).toHaveText(
      TEST_DATA.couponName,
    );
    await expect(orderConfirmationPage.orderSummary.couponName).toHaveCount(1);

    await expect(orderConfirmationPage.orderSummary.couponDiscount).toHaveText(
      "-£" + couponDiscountValue,
    );

    expect(await orderConfirmationPage.orderSummary.getTotalPaidNumber()).toBe(
      amountAfterDiscount,
    );
  });
});

test("Apply a valid coupon before signing in", async ({
  page,
  headerUI,
  cartPage,
  checkoutPage,
  loginPage,
  login,
  toasts,
  addProductAndOpenCart,
}) => {
  await test.step("Apply a valid coupon on cart before signing in", async () => {
    await addProductAndOpenCart(TEST_DATA.productName1);
    await headerUI.loggedOutUI();

    await expect(page).toHaveURL(cartPage.url);
    await expect(cartPage.cartPageHeading).toHaveText(
      HEADINGS.fullCartPageTitle,
    );
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).toHaveCount(0);

    amountBeforeDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await cartPage.orderSummary.setCoupon(TEST_DATA.validCouponCode);

    expect(await toasts.getLatestToastMessage()).toBe(
      TOAST_MESSAGES.validCouponApplied,
    );

    await expect(cartPage.orderSummary.appliedCouponMessage).toHaveText(
      TEST_DATA.couponMessage,
    );

    await expect(cartPage.orderSummary.couponName).toHaveText(
      TEST_DATA.couponName,
    );

    await expect(cartPage.orderSummary.couponName).toHaveCount(1);

    await expect
      .poll(() => cartPage.orderSummary.getTotalAmountNumber())
      .not.toBe(amountBeforeDiscount);

    couponDiscountValue = Number(
      (amountBeforeDiscount * TEST_DATA.couponDiscount).toFixed(2),
    );
    amountAfterDiscount = amountBeforeDiscount - couponDiscountValue;

    //..bugs/coupon-code-bugs.md > Bug-001 (Discount amount is incorrectly calculated)
    await expect(cartPage.orderSummary.couponDiscount).toHaveText(
      "–£" + couponDiscountValue,
    );

    expect(await cartPage.orderSummary.getTotalAmountNumber()).toBe(
      amountAfterDiscount,
    );
  });

  await test.step("Validate coupon on Checkout after signing in", async () => {
    await cartPage.orderSummary.clickCheckoutButton();
    await expect(page).toHaveURL(loginPage.url);
    await expect(loginPage.loginPageHeading).toHaveText(
      HEADINGS.loginPageTitle,
    );
    await login(CREDENTIALS.email, CREDENTIALS.password);
    expect(await toasts.getLatestToastMessage()).toBe(
      TOAST_MESSAGES.successfulLogin,
    );
    await headerUI.loggedInUI();

    await expect(page).toHaveURL(checkoutPage.url);
    //Bug: Coupon row is not displayed when executing the case automated. To clarify the reason.
    await expect(checkoutPage.orderSummary.couponName).toHaveText(
      TEST_DATA.couponName,
    );

    await expect(checkoutPage.orderSummary.couponName).toHaveCount(1);
    //..bugs/coupon-code-bugs.md > Bug-001 (Discount amount is incorrectly calculated)
    await expect(checkoutPage.orderSummary.couponDiscount).toHaveText(
      "–£" + couponDiscountValue,
    );

    expect(await checkoutPage.orderSummary.getTotalAmountNumber()).toBe(
      amountAfterDiscount,
    );
  });
});

test("Maintain valid discount amount while continuing shopping", async ({
  page,
  header,
  cartPage,
  productsPage,
  toasts,
  addProductAndOpenCart,
}) => {
  await test.step("Apply a valid coupon on cart after signing in", async () => {
    await addProductAndOpenCart(TEST_DATA.productName1);

    await expect(page).toHaveURL(cartPage.url);
    await expect(cartPage.cartPageHeading).toHaveText(
      HEADINGS.fullCartPageTitle,
    );
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).toHaveCount(0);

    amountBeforeDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await cartPage.orderSummary.setCoupon(TEST_DATA.validCouponCode);

    expect(await toasts.getLatestToastMessage()).toBe(
      TOAST_MESSAGES.validCouponApplied,
    );

    await expect(cartPage.orderSummary.appliedCouponMessage).toHaveText(
      TEST_DATA.couponMessage,
    );

    await expect(cartPage.orderSummary.couponName).toHaveText(
      TEST_DATA.couponName,
    );

    await expect(cartPage.orderSummary.couponName).toHaveCount(1);

    await expect
      .poll(() => cartPage.orderSummary.getTotalAmountNumber())
      .not.toBe(amountBeforeDiscount);

    couponDiscountValue = Number(
      (amountBeforeDiscount * TEST_DATA.couponDiscount).toFixed(2),
    );
    amountAfterDiscount = amountBeforeDiscount - couponDiscountValue;

    //..bugs/coupon-code-bugs.md > Bug-001 (Discount amount is incorrectly calculated)
    await expect(cartPage.orderSummary.couponDiscount).toHaveText(
      "–£" + couponDiscountValue,
    );

    expect(await cartPage.orderSummary.getTotalAmountNumber()).toBe(
      amountAfterDiscount,
    );
  });

  await test.step("Recalculate coupon discount after adding product", async () => {
    await cartPage.orderSummary.clickContinueShoppingButton();

    await expect(page).toHaveURL(productsPage.url);
    await expect(productsPage.productHeading).toHaveText(
      HEADINGS.produtcsPageTitle,
    );

    await productsPage.productGrid.addProductToCart(TEST_DATA.productName2);
    await expect(header.cartCount).toHaveText("2");

    const productPrice = await productsPage.productGrid.getProductPrice(
      TEST_DATA.productName2,
    );
    await header.openCart();

    await expect(page).toHaveURL(cartPage.url);
    await expect(cartPage.cartPageHeading).toHaveText(
      HEADINGS.fullCartPageTitle,
    );

    const updatedAmountBeforeDiscount = amountBeforeDiscount + productPrice;
    //..bugs/coupon-code-bugs.md > Bug-001 (Discount amount is incorrectly calculated)
    const expectedTotalAmount = Number(
      updatedAmountBeforeDiscount -
        updatedAmountBeforeDiscount * TEST_DATA.couponDiscount,
    ).toFixed(2);

    const updatedTotalAmount =
      await cartPage.orderSummary.getTotalAmountNumber();

    await expect(updatedTotalAmount).toBe(expectedTotalAmount);
  });
});

test("Apply an invalid coupon after signing in", async ({
  page,
  cartPage,
  toasts,
  addProductAndOpenCart,
}) => {
  await test.step("Apply an invalid coupon on cart after signing in", async () => {
    await addProductAndOpenCart(TEST_DATA.productName1);

    await expect(page).toHaveURL(cartPage.url);
    await expect(cartPage.cartPageHeading).toHaveText(
      HEADINGS.fullCartPageTitle,
    );
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).toHaveCount(0);

    amountBeforeDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await cartPage.orderSummary.setCoupon(TEST_DATA.invalidCouponCode);

    //..bugs/coupon-code-bugs.md > Bug-003 (Misleading toast message for invalid coupon)
    expect(await toasts.getLatestToastMessage()).toBe(
      TOAST_MESSAGES.invalidCouponApplied,
    );

    await expect(cartPage.orderSummary.appliedCouponMessage).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();

    amountAfterDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await expect(amountBeforeDiscount).toBe(amountAfterDiscount);
  });
});

test("Apply an empty coupon after signing in", async ({
  page,
  cartPage,
  toasts,
  addProductAndOpenCart,
}) => {
  await test.step("Apply an empty coupon on cart after signing in", async () => {
    await addProductAndOpenCart(TEST_DATA.productName1);

    await expect(page).toHaveURL(cartPage.url);
    await expect(cartPage.cartPageHeading).toHaveText(
      HEADINGS.fullCartPageTitle,
    );
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).toHaveCount(0);

    amountBeforeDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await cartPage.orderSummary.setCoupon(TEST_DATA.emptyCouponCode);

    //..bugs/coupon-code-bugs.md > Bug-003 (Missing toast message for an empty coupon code)
    expect(await toasts.getLatestToastMessage()).toBe(
      TOAST_MESSAGES.emptyCouponApplied,
    );

    await expect(cartPage.orderSummary.appliedCouponMessage).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();

    amountAfterDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await expect(amountBeforeDiscount).toBe(amountAfterDiscount);
  });
});

test("Apply an invalid coupon before signing in", async ({
  page,
  headerUI,
  cartPage,
  toasts,
  addProductAndOpenCart,
}) => {
  await test.step("Apply an invalid coupon on cart before signing in", async () => {
    await addProductAndOpenCart(TEST_DATA.productName1);
    await headerUI.loggedOutUI();

    await expect(page).toHaveURL(cartPage.url);
    await expect(cartPage.cartPageHeading).toHaveText(
      HEADINGS.fullCartPageTitle,
    );
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).toHaveCount(0);

    amountBeforeDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await cartPage.orderSummary.setCoupon(TEST_DATA.invalidCouponCode);

    //..bugs/coupon-code-bugs.md > Bug-003 (Misleading toast message for invalid coupon)
    expect(await toasts.getLatestToastMessage()).toBe(
      TOAST_MESSAGES.invalidCouponApplied,
    );

    await expect(cartPage.orderSummary.appliedCouponMessage).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();

    amountAfterDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await expect(amountBeforeDiscount).toBe(amountAfterDiscount);
  });
});

test("Apply an empty coupon before signing in", async ({
  page,
  headerUI,
  cartPage,
  toasts,
  addProductAndOpenCart,
}) => {
  await test.step("Apply an empty coupon on cart before signing in", async () => {
    await addProductAndOpenCart(TEST_DATA.productName1);
    await headerUI.loggedOutUI();

    await expect(page).toHaveURL(cartPage.url);
    await expect(cartPage.cartPageHeading).toHaveText(
      HEADINGS.fullCartPageTitle,
    );
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).toHaveCount(0);

    amountBeforeDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await cartPage.orderSummary.setCoupon(TEST_DATA.emptyCouponCode);

    //..bugs/coupon-code-bugs.md > Bug-003 (Missing toast message for an empty coupon code)
    expect(await toasts.getLatestToastMessage()).toBe(
      TOAST_MESSAGES.emptyCouponApplied,
    );

    await expect(cartPage.orderSummary.appliedCouponMessage).not.toBeVisible();
    await expect(cartPage.orderSummary.couponName).not.toBeVisible();

    amountAfterDiscount = await cartPage.orderSummary.getTotalAmountNumber();

    await expect(amountBeforeDiscount).toBe(amountAfterDiscount);
  });
});
