const { I, passcodePopup } = inject()

When('in passcode popup, click on close button', async () => {
  await I.isBannerInvisible()
  await passcodePopup.isVisible()
  await passcodePopup.clickOnCloseBtn()
})

When('in passcode popup, click on continue button', async () => {
  await I.isBannerInvisible()
  await passcodePopup.clickOnContinueBtn()
})

When('in passcode popup, from sms enter password: {string}', async (password: string) => {
  await I.isBannerInvisible()
  await passcodePopup.enterPassword(password)
})
