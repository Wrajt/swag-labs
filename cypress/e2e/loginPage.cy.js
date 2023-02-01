import { onLoginPage } from "../support/LoginPage";
import { loginPage } from "../support/selectors";
import { secretPassword } from "../support/secretPassword";

describe("Login", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });
  //login user with correct credentials
  it("should log in successfully when correct credentials provided", () => {
    onLoginPage.runLoginTests("standard_user", secretPassword);
    cy.contains("Products").should("be.visible");
  });
  //lock out user with incorrect credentials and show error message
  it("should throw an error when incorrect credentials provided", () => {
    onLoginPage.runLoginTests("locked_out_user", secretPassword);
    cy.get(loginPage.errorBox)
      .should("be.visible")
      .should("contain", loginPage.errorMsg);
  });
});
