## Bug-001

**Title:** Discount amount is incorrectly calculated
**Severity:** Critical - the functionality does not work as expected and results in incorrect pricing
**Priority:** Low - the coupon functionality has not yet been released to production
**Found by test case:** `tests/coupon-code.spec.js > Apply a valid coupon after signing in`

### Steps to Reproduce:

1.  Login to Waracle Store.
2.  Go to Home page.
3.  Add to cart any product.
4.  Go to Cart page.
5.  Apply a valid coupon code. (_WARACLE25_)

### Actual Result:

1.  Coupon discount is incorrectly calculated in the Order Summary section resulting in an incorrect Total amount.
2.  Coupon name is correctly displayed in the Order Summary section.
3.  Coupon message is correctly displayed below the coupon code input.
4.  Successful toast message is displayed.

### Expected Result:

Coupon discount and total amount should be correctly calculated reflecting the coupon's discount.

### Notes:

1. The issue is reproducible on Cart, Checkout and Order Confirmation pages.
2. The issue is reproducible when adding a coupon code before and after login.

---

## Bug-002

**Title:** Misleading toast message for invalid coupon
**Severity:** Medium  
**Priority:** Low  
**Found by test case:** `tests/coupon-code.spec.js > Apply an invalid coupon after signing in`

### Steps to Reproduce:

1.  Login to Waracle Store.
2.  Go to Home page.
3.  Add to cart any product.
4.  Go to Cart page.
5.  Apply an invalid coupon code. (_WARACLE70_)

### Actual Result:

1.  Misleading toast message with content "Coupon entered" is displayed, although the coupon is not applied.
2.  Coupon message is not displayed below the coupon code input.
3.  Coupon name/discount is not displayed in the Order Summary section.

### Expected Result:

A clear message explaining the coupon state should be displayed.

### Notes:

1. The issue is reproducible when adding a coupon code before and after login.

---

## Bug-003

**Title:** Missing toast message for an empty coupon code
**Severity:** Medium  
**Priority:** Low  
**Found by test case:** `tests/coupon-code.spec.js > Apply an empty coupon after signing in`

### Steps to Reproduce:

1.  Login to Waracle Store.
2.  Go to Home page.
3.  Add to cart any product.
4.  Go to Cart page.
5.  Apply an empty coupon code.

### Actual Result:

1.  Toast message is not displayed at all.
2.  Coupon message is not displayed below the coupon code input.
3.  Coupon name/discount is not displayed in the Order Summary section.

### Expected Result:

A clear message explaining the coupon state should be displayed.

### Notes:

The issue is reproducible when adding a coupon code before and after login.
