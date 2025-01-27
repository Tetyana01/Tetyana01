const { I } = inject()

export = {
  fields: {
    popupEnterData: {
      css: `.loanEarlyRepaymentEnterData`,
    },
    popupVerifyData: {
      css: `.loanEarlyRepaymentVerifyData`,
    },
    close: {
      css: `a.actionClose`,
    },
    continue: {
      css: `button.next`,
    },
    card: {
      css: `.comboboxField .ui-combobox`,
    },
    cards: {
      css: `.ui-combobox .ui-menu-item`,
    },
    sum: {
      css: `.amountInputField .sum`,
    },
  },
  async isVisible() {
    await I.waitForVisible(locate(this.fields.popupEnterData).or(this.fields.popupVerifyData), 60)
  },
  async selectCreditCard(iban: string) {
    await I.click(locate(this.fields.popupEnterData).find(this.fields.card))
    await I.click(locate(this.fields.popupEnterData).find(this.fields.cards).withText(iban))
  },
  async enterSum(sum: string) {
    await I.fillField(locate(this.fields.popupEnterData).find(this.fields.sum), sum)
    await I.pressKey('Enter')
  },
  async clickOnContinueBtn() {
    await I.click(this.fields.continue)
  },
}
