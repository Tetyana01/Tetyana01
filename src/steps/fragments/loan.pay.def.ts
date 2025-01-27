const { I, loanPayPopup } = inject()

When('in loan pay popup, select credit card which iban contains {string}', async (iban: string) => {
  await I.isBannerInvisible()
  await loanPayPopup.isVisible()
  await loanPayPopup.selectCreditCard(iban)
})

When('in loan pay popup, enter sum {string}', async (sum: string) => {
  await I.isBannerInvisible()
  await loanPayPopup.isVisible()
  await loanPayPopup.enterSum(sum)
})

When('in loan pay popup, click on continue button', async () => {
  await I.isBannerInvisible()
  await loanPayPopup.clickOnContinueBtn()
})
