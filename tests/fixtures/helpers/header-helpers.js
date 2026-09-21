import { expect } from "@playwright/test";

export const headerHelper = {
  headerUI: async ({ header }, use) => {
    const helpers = {
      async loggedInUI() {
        await expect(header.signOutButton).toBeVisible();
        await expect(header.signInButton).not.toBeVisible();
      },
      async loggedOutUI() {
        await expect(header.signInButton).toBeVisible();
        await expect(header.signOutButton).not.toBeVisible();
      },
    };

    await use(helpers);
  },
};
