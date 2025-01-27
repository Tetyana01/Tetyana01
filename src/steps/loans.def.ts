const { I, loansPage, restructuringPopup } = inject()

Given('go to loans page', async () => {
  await loansPage.open()
})

Given('I am on loans page', async () => {
  await loansPage.isOpen()
})

When('on loans page, select credit card which iban contains {string}', async (iban: string) => {
  await I.isBannerInvisible()
  await loansPage.selectCreditCardByIBAN(iban)
})

Then('on loans page, restructuring button is visible', async () => {
  await I.isBannerInvisible()
  await loansPage.isRestructuringBtnVisible()
})

Then('on loans page, restructuring button is invisible', async () => {
  await I.isBannerInvisible()
  await loansPage.isRestructuringBtnInvisible()
})

When('on loans page, click on restructuring button', async () => {
  await I.isBannerInvisible()
  await loansPage.isRestructuringBtnVisible()
  await loansPage.clickOnRestructuringBtn()
})

Then('on loans page, restructuring popup is visible', async () => {
  await I.isBannerInvisible()
  await restructuringPopup.isVisible()
})

Then('on loans page, restructuring popup is invisible', async () => {
  await I.isBannerInvisible()
  await restructuringPopup.isInvisible()
})

When('on loans page, click on long-term repayment button', async () => {
  await I.isBannerInvisible()
  await loansPage.clickOnLongTermRepaymentBtn()
})

When('on loans page, click on loan pay button', async () => {
  await I.isBannerInvisible()
  await loansPage.isLoanPayBtnVisible()
  await loansPage.clickOnLoanPayBtn()
})
