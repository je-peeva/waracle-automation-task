import { PLACEHOLDERS } from "../tests/fixtures/constants/input-placeholders.js";

export class ShippingAddress {
  constructor(page) {
    this.page = page;

    this.addressInput = page.getByPlaceholder(PLACEHOLDERS.address);
    this.cityInput = page.getByPlaceholder(PLACEHOLDERS.city);
    this.postcodeInput = page.getByPlaceholder(PLACEHOLDERS.postcode);
  }

  async setAddress(address) {
    await this.addressInput.fill(address);
  }

  async setCity(city) {
    await this.cityInput.fill(city);
  }

  async setPostcode(postcode) {
    await this.postcodeInput.fill(postcode);
  }

  async setShippingAddress(address, city, postcode) {
    await this.setAddress(address);
    await this.setCity(city);
    await this.setPostcode(postcode);
  }
}
