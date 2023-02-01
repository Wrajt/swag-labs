import { onLoginPage } from "../support/LoginPage";
import { onProductsPage } from "../support/ProductPage";

import { productPage, products } from "../support/selectors";
import { secretPassword } from "../support/secretPassword";

describe("End-to-end test for shopping cart", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it("should add products to cart", () => {
    //first login user
    onLoginPage.runLoginTests("standard_user", secretPassword), { log: false };
    //add all products to the cart
    products.forEach((product) => onProductsPage.addToCart(product));
    //confirm the quantity
    cy.get(productPage.cartQuantity).then((quantity) => {
      const itemQuantity = quantity.text();
      expect(Number(itemQuantity)).to.equal(products.length);
    });
  });
});

it("removes all items from the cart", () => {
  onLoginPage.runLoginTests("standard_user", secretPassword);
  //add all items to cart
  products.forEach((product) => onProductsPage.addToCart(product));
  //check if all items are in cart
  cy.get(productPage.cartQuantity).then((quantity) => {
    const itemQuantity = quantity.text();
    expect(Number(itemQuantity)).to.equal(products.length);
  });
  //remove all items from the cart
  products.forEach((product) => onProductsPage.removeFromCart(product));
  //check if the cart is empty
  cy.get(productPage.cartQuantity).should("not.be", "visible");
});

it("sorts products by price high to low", () => {
  //first login user
  onLoginPage.runLoginTests("standard_user", secretPassword);
  //sort items by price high to low
  onProductsPage.sortBy("hilo");
  cy.get(".inventory_item:first")
    .find(".inventory_item_name")
    .should("contain", "Sauce Labs Fleece Jacket");
});
