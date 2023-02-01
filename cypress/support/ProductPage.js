import { productPage, checkout } from "./selectors";

class ProductsPage {
  addToCart(productName) {
    cy.get(`.inventory_item:contains(${productName})`)
      .find(productPage.addToCart)
      .click();
  }

  removeFromCart(productName) {
    cy.get(`.inventory_item:contains(${productName})`)
      .find(productPage.removeFromCart)
      .click();
  }

  sortBy(sortOption) {
    cy.get(productPage.sortBy).select(sortOption);
  }

  checkout() {
    cy.get(productPage.cartIcon).click();
    cy.get(checkout.checkoutBtn).click();
    cy.get(checkout.firstNameField).type("John");
    cy.get(checkout.lastNameField).type("Doe");
    cy.get(checkout.postalCodeField).type("12345");
    cy.get(checkout.continueBtn).click();
    cy.get(checkout.finishBtn).click();
  }
}
export const onProductsPage = new ProductsPage();
