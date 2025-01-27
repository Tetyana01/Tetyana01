const { I } = inject()

export = {
  fields: {
    popup: {
      css: `.loanRestructuringEnterData`,
    },
    close: {
      css: `a.actionClose`,
    },
    continue: {
      css: `button.next`,
    },
    password: {
      css: `.passcodeField input`,
    },
  },
  async isVisible() {
    await I.waitForVisible(this.fields.popup, 60)
  },
  async isInvisible() {
    await I.waitForInvisible(this.fields.popup, 10)
  },
  async clickOnCloseBtn() {
    await I.click(this.fields.close)
  },
  async clickOnContinueBtn() {
    await I.click(this.fields.continue)
  },
  async enterPassword(password: string) {
    await I.fillField(this.fields.password, password)
  },
}
