const { I, restructuringPopup } = inject()

When('in restructuring popup, click on close button', async () => {
  await I.isBannerInvisible()
  await restructuringPopup.isVisible()
  await restructuringPopup.clickOnCloseBtn()
})

When('in restructuring popup, click on continue button', async () => {
  await I.isBannerInvisible()
  await restructuringPopup.clickOnContinueBtn()
})

When('in restructuring popup, click on prolonging loan term checkbox', async () => {
  await I.isBannerInvisible()
  await restructuringPopup.isVisible()
  await restructuringPopup.clickOnProlongingLoanTermCheckbox()
})

When('in restructuring popup, confirm authenticity', async () => {
  await I.isBannerInvisible()
  await restructuringPopup.clickOnConfirmAuthenticity()
})

When('in restructuring popup, confirm terms of restructuring', async () => {
  await I.isBannerInvisible()
  await restructuringPopup.clickOnConfirmTerm()
})
