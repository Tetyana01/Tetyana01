const { I } = inject()

export = {
  fields: {
    creditCards: {
      next: {
        css: `.swiper-next`,
      },
      prev: {
        css: `.swiper-prev`,
      },
      current: {
        css: `.swiper-slide-selected`,
      },
      title: {
        css: `.alias`,
      },
      sum: {
        css: `.sum`,
      },
      currency: {
        css: `.currency`,
      },
      iban: {
        css: `.number`,
      },
      loanPay: {
        css: `.actionPayLoan`,
      },
      repayment: {
        css: `.actionLoanEarlyRepayment`,
      },
      restructuring: {
        css: `.actionLoanRestructuring`,
      },
    },
  },
  async open() {
    await I.amOnPage('loans')
  },
  async isOpen() {
    await I.waitInUrl('loans', 10)
    await I.waitForVisible('body')
  },
  async selectCreditCardByIBAN(iban: string) {
    await I.see(iban, this.fields.creditCards.iban)
    await I.click(locate(this.fields.creditCards.iban).withText(iban))
  },
  async isRestructuringBtnVisible() {
    await I.waitForVisible(this.fields.creditCards.restructuring, 60)
  },
  async isRestructuringBtnInvisible() {
    await I.waitForInvisible(this.fields.creditCards.restructuring, 60)
  },
  async clickOnRestructuringBtn() {
    await I.click(this.fields.creditCards.restructuring)
  },
  async isLongTermRepaymentBtnVisible() {
    await I.waitForVisible(this.fields.creditCards.repayment, 60)
  },
  async clickOnLongTermRepaymentBtn() {
    await I.click(this.fields.creditCards.repayment)
  },
  async isLongTermRepaymentBtnInvisible() {
    await I.waitForInvisible(this.fields.creditCards.repayment, 10)
  },
  async isLoanPayBtnVisible() {
    await I.waitForVisible(this.fields.creditCards.loanPay, 60)
  },
  async isLoanPayBtnInvisible() {
    await I.waitForInvisible(this.fields.creditCards.loanPay, 10)
  },
  async clickOnLoanPayBtn() {
    await I.click(locate(this.fields.creditCards.loanPay))
  },
}
