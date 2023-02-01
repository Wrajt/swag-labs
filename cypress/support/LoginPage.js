import { loginPage } from "./selectors";

class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillUsername(username) {
    cy.get(loginPage.usernameField).type(username);
  }

  fillPassword(password) {
    cy.get(loginPage.passwordField).type(password, { log: false });
  }

  submit() {
    cy.get(loginPage.loginBtn).click();
  }
}

class LoginTests {
  runLoginTests(login, password) {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername(login);
    loginPage.fillPassword(password);
    loginPage.submit();
  }
}
export const onLoginPage = new LoginTests();
