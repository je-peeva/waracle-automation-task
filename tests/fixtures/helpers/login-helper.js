export const loginHelper = {
  login: async ({ loginPage }, use) => {
    const validLogin = async (email, password) => {
      await loginPage.navigate();
      await loginPage.login(email, password);
    };

    await use(validLogin);
  },
};
