const {I} = inject()

// in this file you can append custom step methods to 'I' object
module.exports = () => actor({
  // Define custom steps here, use 'this' to access default methods of I.
  // It is recommended to place a general 'login' function here.
  async isBannerInvisible() {
    await I.waitForInvisible(`.blocking-indicator-message`, 60)
  }
})
