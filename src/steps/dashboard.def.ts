const { I, dashboardPage } = inject()

Given('go to dashboard page', async () => {
  await dashboardPage.open()
})

Given('I am on dashboard page', async () => {
  await dashboardPage.isOpen()
})

When('on dashboard page, in left menu, click on loans', async () => {
  await dashboardPage.inLeftMenuClickOnLoans()
})

When('on dashboard page, in personal proposal, click on offer by position {int}', async (position: number) => {
  await I.isBannerInvisible()
  await dashboardPage.inPersonalProposalClickOnOfferByPosition(position)
})
