const { I, successPopup } = inject()

When('success popup is visible', async () => {
  await I.isBannerInvisible()
  await successPopup.clickOnCloseBtn()
})

When('in success popup, click on close button', async () => {
  await I.isBannerInvisible()
  await successPopup.isVisible()
  await successPopup.clickOnCloseBtn()
})
