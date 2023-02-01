import { onProductsPage } from "../support/ProductPage";
import { onLoginPage } from "../support/LoginPage";
import { checkout } from "../support/selectors";

describe("General shopping flow from start to finish", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it("should complete an order from start to finish", () => {
    //first login user
    onLoginPage.runLoginTests("standard_user", "secret_sauce");
    cy.contains("Products").should("be.visible");
    //add product to cart
    onProductsPage.addToCart("Sauce Labs Onesie");
    //checkout
    onProductsPage.checkout();
    //confirm order is finished
    cy.get(checkout.checkoutConfirmation).then((confirmation) => {
      const confirmationText = confirmation.text();
      expect(confirmationText.toUpperCase()).to.equal("CHECKOUT: COMPLETE!");
    });
  });
});
