Feature: Offer functionality

  Background:
    * go to the login page
    * on login page, log in as a user

  Scenario: make first offer
    * I am on dashboard page
    * on dashboard page, in personal proposal, click on offer by position 1
    * in offer popup, click on continue order button
    * in offer popup, enter date '05072023'
    * in offer popup, click on continue button
    * in offer popup, download file of credit contract
    * in offer popup, confirm read
    * in offer popup, click on continue button
    * in passcode popup, from sms enter password: '111111'
    * in passcode popup, click on continue button
    * success popup is visible
