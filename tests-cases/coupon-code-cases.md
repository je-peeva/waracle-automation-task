# Coupon Code Test Suite

The Coupon Code Test Suite valides the functionality of coupon code input feature in an e-commerce application of Waracle Store.
It includes both positive and negative scenarios to ensure correct handling of valid, invalid or missing data.

---

## 1: Successful Coupon Apply (Positive tests)

### <u>Test case 1:</u> Apply valid coupon discount before sign in

**Description**: Verify the correct discount is applied when adding coupon code before sign in.

**Preconditions**: 
1. Have a registered user.
2. Do not sign in.

**Steps**:

1. Go to Home page.
2. Add to Cart any articul.
3. Open Shopping Cart.
4. Apply a valid coupon code.
5. Click Proceed to Checkout.
6. Log in with user matching the precondition.
7. Populate all required fields.
8. Complete the order.

**Expected result**:

1. Successful transaction page is displayed.
2. Correct coupon name is displayed on the last row.
3. Correct discount amount is displayed on the last row.
4. Total paid amount is decreased with the coupon amount.

### <u>Test case 2:</u> Apply valid coupon discount after sign in

**Description**: Verify the correct discount is applied when adding coupon code after sign in.

**Precondition**: Have a registered user.

**Steps**:

1. Go to Home page.
2. Log in with user matching the precondition.
3. Add to Cart any articul.
4. Open Shopping Cart.
5. Apply a valid coupon code.
6. Click "Proceed to Checkout" button.
7. Populate all required fields.
8. Complete the order.

**Expected result**:

1. Successful transaction page is displayed.
2. Correct coupon name is displayed on the last row.
3. Correct discount amount is displayed on the last row.
4. Total paid amount is decreased with the coupon amount.

### <u>Test case 3:</u> Maintain a valid discount amount while shopping 

**Description**: Verify the correct discount is maintained after applying a coupon code and continuing shopping.

**Precondition**: Have a registered user.

**Steps**:

1. Go to Home page.
2. Log in with user matching the precondition.
3. Add to Cart any articul.
4. Open Shopping Cart.
5. Apply a valid coupon code.
6. Click "Continue shopping" button.
7. Add to Cart new articul.
8. Open Shopping Cart.

**Expected result**: Coupon discount is correctly applyed for the whole amount.

9. Click "Proceed to Checkout" button.
10. Populate all required fields.
11. Complete the order.

**Expected result**:

1. Successful transaction page is displayed.
2. Correct coupon name is displayed on the last row.
3. Correct discount amount is displayed on the last row.
4. Total paid amount is decreased with the coupon amount.