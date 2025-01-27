const { I } = inject()

export = {
  fields: {
    personalProposal: {
      elements: {
        css: `.offer`,
      },
      type: {
        css: `.type`,
      },
      title: {
        css: `.title`,
      },
      desc: {
        css: `.details`,
      },
    },
    leftMenu: {
      elements: {
        css: `.menu`,
      },
      dashboard: {
        css: `.dashboard`,
      },
      payments: {
        css: `.payments`,
      },
      transfers: {
        css: `.transfers`,
      },
      currencyExchange: {
        css: `.currencyExchange`,
      },
      loyaltyProgram: {
        css: `.loyaltyProgram`,
      },
      templates: {
        css: `.templates`,
      },
      transactions: {
        css: `.transactions`,
      },
      subscriptions: {
        css: `.subscriptions`,
      },
      accounts: {
        css: `.accounts`,
      },
      cards: {
        css: `.cards`,
      },
      deposits: {
        css: `.deposits`,
      },
      loans: {
        css: `.loans`,
      },
      budget: {
        css: `.budget`,
      },
    },
  },
  async open() {
    await I.amOnPage('dashboard')
  },
  async isOpen() {
    await I.waitInUrl('dashboard', 180)
    await I.waitForVisible('body')
  },
  async inLeftMenuClickOnLoans() {
    await I.click(locate(this.fields.leftMenu.elements).find(this.fields.leftMenu.loans))
  },
  async inPersonalProposalClickOnOfferByPosition(position: number) {
    await I.wait(3)
    await I.click(locate(this.fields.personalProposal.elements).at(position))
  },
}
