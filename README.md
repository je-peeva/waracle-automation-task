# Waracle Store - Coupon Code Test Automation Suite

## Project Overview

This project automates coupon code feature **Waracle Store e-commerce application** (http://localhost:5173/). Covers applying valid, invalid and empty coupon codes, discount calculation and coupon persistence across cart, checkout and order confirmation pages.

---

## Language and Framework

- **JavaScript** – Test scripting language
- **Playwright** – Browser automation (Chrome, Firefox, Safari)
- **Node.js** – Runtime environment
- **ESLint & Prettier** – Code quality and formatting tools

---

## Setup

Follow these steps to set up the automation project on your local machine:

1. Unzip the project.
2. Open the entire project folder in VS Code.
3. Open New Terminal in VS Code.
4. Install dependencies:

```bash
npm install
```

5. Install Playwright browsers:

```bash
npx playwright install
```

---

## Running the tests

After completing the installation and setup, you can run your Playwright tests with the following commands:

1. Run all tests

```bash
npx playwright test
```

OR

```bash
npm test
```

2. Run a specific test:

```bash
npx playwright test -g "{TestName}"
```

3. Run tests in a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

4. View test report
   After running tests, open the HTML report:

```bash
npx playwright show-report
```

---

## Project Structure

```bash

waracle-automation-task
│
├── bugs                                   # Documentations of known issues
│
├── components                             # Page Object Model classes for components
├── pages                                  # Page Object Model classes for pages
│
├── tests                                  # Automated tests
│   └── fixtures                           # Shared test setup/data
│   │   ├── constants                      # Static values and messages
│   │   ├── helpers                        # Reusable helper functions used across fixtures
│   │   └── combined-fixtures.js           # Combined custom fixtures of page objects, helpers, constants and test data
│   └── coupon-code.spec.js                # Automated coupon code tests
│
├── test-cases                             # Manual test cases documentation
│
├── .gitignore                             # Git ignore files
├── eslint.config.mjs                      # ESLint configuration
├── package.json                           # Project dependencies
├── playwright.config.js                   # Playwright test runner configuration
└── README.md                              # Project documentation

```

## Thoughts on the release

The coupon code can be successfully applied, but **the discount is calculated incorrectly**. This issue is a release blocker, and the functionality should not go to production until it is fixed.
Two more issues affects the quality - invalid and empty coupon codes show the same unclear toast message("Coupon entered") instead of a message that clearly explains the coupon state.

Additionally, several requirements need further clarification before the feature can be considered fully specified:

1. Should a single coupon code be allowed to be applied multiple times?
2. Should coupon codes have an expiration date?
3. Should users be allowed to apply multiple coupon codes at once?
4. Should entering an invalid coupon code automatically remove an already applied valid coupon?
5. Should coupon codes be combinable with existing promotions in the e-store?
6. Should coupon codes be case-sensitive?
7. Should validation messages be displayed when unsupported characters are entered?
8. Should input length restrictions be enforced, with appropriate validation messages?
9. Should leading, trailing, and consecutive spaces in the coupon code be automatically trimmed?
10. What message should be displayed when an invalid coupon code is entered?
11. What message should be displayed when the coupon code field is left empty?
12. Should validation messages for invalid or empty coupon codes be displayed as toast notifications or as static messages below the input field?
