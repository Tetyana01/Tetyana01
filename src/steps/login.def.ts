const { I, loginPage } = inject()

Given('go to the login page', async () => {
  await loginPage.open()
})

Given('I am on login page', async () => {
  await loginPage.isOpen()
})

When(
  'on login page, log in as a user with username: {string}, password: {string}, remember: {string}',
  async (username: string, password: string, remember: boolean) => {
    await loginPage.login(username, password, remember)
  },
)

Given('on login page, log in as a user', async () => {
  await loginPage.login(process.env.USER_USERNAME, process.env.USER_PASSWORD)
})
