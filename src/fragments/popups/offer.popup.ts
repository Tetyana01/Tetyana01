const { I } = inject()

export = {
  fields: {
    popupEnterData: {
      css: `.openLoanEnterData`,
    },
    popupVerifyData: {
      css: `.openLoanVerifyData`,
    },
    close: {
      css: `a.actionClose`,
    },
    continue: {
      css: `button.next`,
    },
    continueOrder: {
      css: `.actionOpenLoan`,
    },
    date: {
      css: `.date`,
    },
    consumerCreditLink: {
      css: `a.actionDownload`,
    },
    confirmRead: {
      css: `.renderedCheckbox label`,
    },
  },
  async isVisible() {
    await I.waitForVisible(locate(this.fields.popupEnterData).or(this.fields.popupVerifyData))
  },
  async clickOnClose() {
    await I.click(this.fields.close)
  },
  async clickOnContinue() {
    await I.click(this.fields.continue)
  },
  async clickOnContinueOrder() {
    await I.click(this.fields.continueOrder)
  },
  async enterDate(date: string) {
    await I.fillField(locate(this.fields.popupEnterData).find(this.fields.date), date)
    await I.pressKey('Enter')
  },
  async downloadCreditContract() {
    await I.handleDownloads('downloads/014-RO-82-149292058.pdf')
    await I.click(locate(this.fields.popupVerifyData).find(this.fields.consumerCreditLink))
    await I.amInPath('output/downloads')
    await I.waitForFile('014-RO-82-149292058.pdf', 30)
  },
  async confirmRead() {
    await I.click(locate(this.fields.popupVerifyData).find(this.fields.confirmRead))
  },
}
