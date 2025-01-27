const { I } = inject()

export = {
  fields: {
    popupEnterData: {
      css: `.loanRestructuringEnterData`,
    },
    popupVerifyData: {
      css: `.loanRestructuringVerifyData`,
    },
    close: {
      css: `a.actionClose`,
    },
    continue: {
      css: `button.next`,
    },
    prolongationLoanTerm: {
      css: `.prolongation .renderedCheckboxField label`,
    },
    authenticity: {
      css: `.personalInfoValid .renderedCheckboxField label`,
    },
    terms: {
      css: `.agreement .agreementCheckboxField label`,
    },
  },
  async isVisible() {
    await I.waitForVisible(locate(this.fields.popupEnterData).or(this.fields.popupVerifyData), 60)
  },
  async isInvisible() {
    await I.waitForInvisible(locate(this.fields.popupEnterData).or(this.fields.popupVerifyData), 10)
  },
  async clickOnCloseBtn() {
    await I.click(this.fields.close)
  },
  async clickOnContinueBtn() {
    await I.click(this.fields.continue)
  },
  async clickOnProlongingLoanTermCheckbox() {
    await I.click(this.fields.prolongationLoanTerm)
  },
  async clickOnConfirmAuthenticity() {
    await I.click(this.fields.authenticity)
  },
  async clickOnConfirmTerm() {
    await I.click(this.fields.terms)
  },
}
