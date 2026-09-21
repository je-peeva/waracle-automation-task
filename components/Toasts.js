export class Toasts {
  constructor(page) {
    this.page = page;

    this.toastMessage = page.locator(".pointer-events-auto.animate-toast-in");
  }

  async getLatestToastMessage() {
    const toast = this.toastMessage.last();

    return (await toast.innerText()).split("\n").pop().trim();
  }
}
