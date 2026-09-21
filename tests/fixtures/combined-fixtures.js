import { test as base } from "@playwright/test";

import { pageObjects } from "./helpers/page-object-fixtures.js";
import { cartHelper } from "./helpers/cart-helpers.js";
import { headerHelper } from "./helpers/header-helpers.js";
import { loginHelper } from "./helpers/login-helper.js";

export const test = base.extend({
  ...pageObjects,
  ...cartHelper,
  ...headerHelper,
  ...loginHelper,
});

export { expect } from "@playwright/test";
