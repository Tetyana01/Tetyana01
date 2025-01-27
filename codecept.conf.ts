require('dotenv').config()
require('ts-node/register')

const {setCommonPlugins, setHeadlessWhen} = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

exports.config = {
  name: 'ua-loans-pi-lending-test-automation',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://digital-uat.avrb.com.ua/ibank',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
      waitForAction: 1000,
    },
    FileSystem: {},
  },
  gherkin: {
    features: './src/**/*.feature',
    steps: [
      './src/steps/login.def.ts',
      './src/steps/dashboard.def.ts',
      './src/steps/loans.def.ts',
      './src/steps/fragments/loan.pay.def.ts',
      './src/steps/fragments/long.term.repayment.def.ts',
      './src/steps/fragments/offer.def.ts',
      './src/steps/fragments/restructuring.def.ts',
      './src/steps/fragments/passcode.def.ts',
      './src/steps/fragments/success.def.ts',
    ],
  },
  // fullPromiseBased: true,
  include: {
    I: './steps.common.ts',
    loginPage: './src/pages/login.page.ts',
    dashboardPage: './src/pages/dashboard.page.ts',
    loansPage: './src/pages/loans.page.ts',
    loanPayPopup: './src/fragments/popups/loan.pay.popup.ts',
    longTermRepaymentPopup: './src/fragments/popups/long.term.repayment.popup.ts',
    offerPopup: './src/fragments/popups/offer.popup.ts',
    restructuringPopup: './src/fragments/popups/restructuring.popup.ts',
    passcodePopup: './src/fragments/popups/passcode.popup.ts',
    successPopup: './src/fragments/popups/success.popup.ts',
  },
  plugins: {},
  bootstrap: false,
  // require modules
  require: ['ts-node/register'],
}
