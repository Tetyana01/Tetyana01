const { I } = inject()

export = {
  fields: {
    username: {
      xpath: `//label[normalize-space(text())="Логін"]/../..//input`,
    },
    password: {
      xpath: `//label[normalize-space(text())="Пароль"]/../..//input`,
    },
    remember: {
      xpath: `//label[normalize-space(text())="Запам'ятати логін"]`,
    },
    submit: {
      xpath: `//button[normalize-space(text())="Вхід"]`,
    },
  },
  async open() {
    await I.amOnPage('home')
  },
  async isOpen() {
    await I.waitInUrl('home', 10)
    await I.waitForVisible('body')
  },
  async login(username: string = '', password: string = '', remember: boolean = false) {
    await I.clearField(this.fields.username)
    await I.fillField(this.fields.username, username)
    await I.clearField(this.fields.password)
    await I.fillField(this.fields.password, password)

    if (remember) await I.click(this.fields.remember)

    await I.click(this.fields.submit)
  },
}
