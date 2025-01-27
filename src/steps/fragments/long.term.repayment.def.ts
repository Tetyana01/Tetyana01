const {I, longTermRepaymentPopup} = inject()

When('in long-term repayment popup, select credit card which iban contains {string}', async (iban: string) => {
  await I.isBannerInvisible()
  await longTermRepaymentPopup.selectCreditCard(iban)
})

When('in long-term repayment popup, enter sum {string}', async (iban: string) => {
  await I.isBannerInvisible()
  await longTermRepaymentPopup.enterSum(iban)
})

When('in long-term repayment popup, click on continue button', async () => {
  await I.isBannerInvisible()
  await longTermRepaymentPopup.clickOnContinueBtn()
})
