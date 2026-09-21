# Coupon Code Test Suite

The Coupon Code Test Suite validates the functionality of coupon code input feature in the Waracle Store e-commerce application.
It includes positive and negative scenarios to ensure correct handling of valid, invalid or missing coupon code.

---

## Acceptance Criteria Coverage

| Acceptance Criteria                                                           | Covered By                 |
| ----------------------------------------------------------------------------- | -------------------------- |
| AC-1 - Customer can apply a coupon code from the cart.                        | TC-01, TC-02, TC-03        |
| AC-2 - Applying WARACLE25 reduces the subtotal by 25%.                        | TC-01, TC-02, TC-03        |
| AC-3 - Standard shipping of £5.00 applies to any non-empty basket.            | Out of scope               |
| AC-4 - Order total = subtotal − discount + shipping.                          | TC-01, TC-02, TC-03        |
| AC-5 - Invalid or empty code applies no discount and shows a clear message.   | TC-04, TC-05, TC-06, TC-07 |
| AC-6 - Order confirmation shows the applied coupon, discount and final total. | TC-01, TC-02, TC-03        |

---

## 1: Valid Coupon Application (Positive tests)

### <u>Test case 1:</u> Apply a valid coupon after signing in

**Description**: Verify the correct discount is applied when a valid coupon code is added after signing in.

**Preconditions**: Have a registered user.

**Steps**:

1. Go to Home page.
2. Log in with the user specified in the precondition.
3. Add any product to the cart.
4. Open the Shopping Cart.
5. Apply a valid coupon code.
6. Click the "Proceed to Checkout" button.
7. Populate all required fields.
8. Complete the order.

**Expected result**:

1. The applied coupon is displayed below the input field in the Order Summary section.
2. The coupon discount of 25% is included in the calculation section of the Order Summary.
3. Total amount is reduced with 25% in the Order Summary section.
4. The Order confirmation page is displayed.
5. The correct coupon name is displayed in the last row of Order confirmation details.
6. The discount amount of 25% is displayed in the last row of Order confirmation details.
7. The total paid amount is reduced by 25% in Order confirmation details.

### <u>Test case 2:</u> Apply a valid coupon before signing in

**Description**: Verify the correct discount is applied when a valid coupon code is added before signing in.

**Preconditions**:

1. Have a registered user.
2. Do not sign in.

**Steps**:

1. Go to Home page.
2. Add any product to the cart.
3. Open the Shopping Cart.
4. Apply a valid coupon code.
5. Click the "Proceed to Checkout" button.
6. Log in with the user specified in the precondition.

**Expected result**:

1. The applied coupon is displayed below the input field in the Order Summary section.
2. The coupon discount of 25% is included in the calculation section of the Order Summary.
3. Total amount is reduced with 25% in the Order Summary section.

### <u>Test case 3:</u> Maintain a valid discount amount while continuing shopping

**Description**: Verify the correct discount is maintained after applying a valid coupon code and continuing shopping.

**Preconditions**: Have a registered user.

**Steps**:

1. Go to Home page.
2. Log in with the user specified in the precondition.
3. Add any product to the cart.
4. Open the Shopping Cart.
5. Apply a valid coupon code.
6. Click the "Continue shopping" button.
7. Add new product to the cart.
8. Open Shopping Cart.
9. Click "Proceed to Checkout" button.
10. Populate all required fields.
11. Complete the order.

**Expected result**:

1. The applied coupon is displayed below the input field in the Order Summary section.
2. The coupon discount of 25% is included in the calculation section of the Order Summary.
3. Total amount is reduced with 25% in the Order Summary section.
4. The coupon remains applied after continuing shopping in the Order Summary section.
5. The discount amount is correctly recalculated as 25% based on the updated cart total.
6. The Order confirmation page is displayed.
7. The correct coupon name is displayed in the last row of Order confirmation details.
8. The discount amount of 25% is displayed in the last row of Order confirmation details.
9. The total paid amount is reduced by 25% in Order confirmation details.

## 2: Invalid Coupon Application (Negative tests)

### <u>Test case 4:</u> Apply an invalid coupon after signing in

**Description**: Verify a discount is not applied when an invalid coupon code is added after signing in.

**Preconditions**: Have a registered user.

**Steps**:

1. Go to Home page.
2. Log in with the user specified in the precondition.
3. Add any product to the cart.
4. Open the Shopping Cart.
5. Apply an invalid coupon code.

**Expected result**:

1. The applied coupon is not displayed below the input field in the Order Summary section.
2. The coupon discount is not included in the calculation section of the Order Summary.
3. The total amount in the Order Summary section remains unchanged.
4. A clear error message for invalid coupon is displayed.

### <u>Test case 5:</u> Apply an empty coupon after signing in

**Description**: Verify a discount is not applied when an empty coupon code is added after signing in.

**Preconditions**: Have a registered user.

**Steps**:

1. Go to Home page.
2. Log in with the user specified in the precondition.
3. Add any product to the cart.
4. Open the Shopping Cart.
5. Apply an empty coupon code.

**Expected result**:

1. The applied coupon is not displayed below the input field in the Order Summary section.
2. The coupon discount is not included in the calculation section of the Order Summary.
3. The total amount in the Order Summary section remains unchanged.
4. A clear error message for empty coupon is displayed.

### <u>Test case 6:</u> Apply an invalid coupon before signing in

**Description**: Verify a discount is not applied when an invalid coupon code is added before signing in.

**Preconditions**:

1. Have a registered user.
2. Do not sign in.

**Steps**:

1. Go to Home page.
2. Add any product to the cart.
3. Open the Shopping Cart.
4. Apply an invalid coupon code.

**Expected result**:

1. The applied coupon is not displayed below the input field in the Order Summary section.
2. The coupon discount is not included in the calculation section of the Order Summary.
3. The total amount in the Order Summary section remains unchanged.
4. A clear error message for invalid coupon is displayed.

### <u>Test case 7:</u> Apply an empty coupon before signing in

**Description**: Verify a discount is not applied when an empty coupon code is added before signing in.

**Preconditions**:

1. Have a registered user.
2. Do not sign in.

**Steps**:

1. Go to Home page.
2. Add any product to the cart.
3. Open the Shopping Cart.
4. Apply an empty coupon code.

**Expected result**:

1. The applied coupon is not displayed below the input field in the Order Summary section.
2. The coupon discount is not included in the calculation section of the Order Summary.
3. The total amount in the Order Summary section remains unchanged.
4. A clear error message for empty coupon is displayed.
