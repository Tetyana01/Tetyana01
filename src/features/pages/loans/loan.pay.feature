Feature: Loan pay functionality

  Background:
    * go to the login page
    * on login page, log in as a user

  @smoke
  Scenario: make loan pay
    * I am on dashboard page
    * on dashboard page, in left menu, click on loans
    * I am on loans page
    * on loans page, select credit card which iban contains '22030807606'
    * on loans page, click on loan pay button
    * in loan pay popup, enter sum '10'
    * in loan pay popup, select credit card which iban contains '262004803455'
    * in loan pay popup, click on continue button
    * in loan pay popup, click on continue button
    * success popup is visible
