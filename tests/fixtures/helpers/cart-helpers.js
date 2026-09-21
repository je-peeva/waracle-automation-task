export const cartHelper = {
  addProductAndOpenCart: async ({ homePage, header }, use) => {
    const addProductAndOpenCart = async (productName) => {
      await homePage.navigate();
      await homePage.productGrid.addProductToCart(productName);
      await header.openCart();
    };

    await use(addProductAndOpenCart);
  },
};
