const { I } = inject()

export = {
  fields: {
    popup: {
      css: `.modal-window-content.operationExecutionPanel.result`,
    },
    close: {
      css: `.close`,
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
}
