# swag-labs challenge

![Swag Labs Robot Image](https://www.saucedemo.com/v1/img/Login_Bot_graphic.png)

The repository contains automatic tests for the [Sauce Demo](https://www.saucedemo.com) platform. The tests cover several key paths and were written using Cypress.io and JavaScript.


The tests cover three basic functionalities:
- login flow
- browsing the store
- checkout flow



Before you start
------------
- make sure you have cypress installed (v 12.3.0)
- make sure your node version is 12 or 14 and higher (my version v18.13.0)

How to run the test
------------
- clone repository to your desktop
- go to the challenge folder
- run cypress from your command line
  - `npx cypress open`
  - run test via Cypress launcher
- or if you wish to run the tests outside of Cypress launcher use `npx cypress run`
