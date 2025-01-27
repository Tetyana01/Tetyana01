const { I, offerPopup } = inject()

When('in offer popup, click on continue button', async () => {
  await I.isBannerInvisible()
  await offerPopup.clickOnContinue()
})

When('in offer popup, click on continue order button', async () => {
  await I.isBannerInvisible()
  await offerPopup.clickOnContinueOrder()
})

Given('in offer popup, enter date {string}', async (date: string) => {
  await I.isBannerInvisible()
  await offerPopup.isVisible()
  await offerPopup.enterDate(date)
})

When('in offer popup, download file of credit contract', async () => {
  await I.isBannerInvisible()
  await offerPopup.isVisible()
  await offerPopup.downloadCreditContract()
})

When('in offer popup, confirm read', async () => {
  await I.isBannerInvisible()
  await offerPopup.isVisible()
  await offerPopup.confirmRead()
})
