/// <reference types='codeceptjs' />
type stepsCommon = typeof import('./steps.common.ts')
type loginPage = typeof import('./src/pages/login.page.ts')
type dashboardPage = typeof import('./src/pages/dashboard.page.ts')
type loansPage = typeof import('./src/pages/loans.page.ts')
type loanPayPopup = typeof import('./src/fragments/popups/loan.pay.popup.ts')
type longTermRepaymentPopup = typeof import('./src/fragments/popups/long.term.repayment.popup.ts')
type offerPopup = typeof import('./src/fragments/popups/offer.popup.ts')
type restructuringPopup = typeof import('./src/fragments/popups/restructuring.popup.ts')
type passcodePopup = typeof import('./src/fragments/popups/passcode.popup.ts')
type successPopup = typeof import('./src/fragments/popups/success.popup.ts')

declare namespace CodeceptJS {
  interface SupportObject {
    I: I
    loginPage: loginPage
    dashboardPage: dashboardPage
    loansPage: loansPage
    loanPayPopup: loanPayPopup
    longTermRepaymentPopup: longTermRepaymentPopup
    offerPopup: offerPopup
    restructuringPopup: restructuringPopup
    passcodePopup: passcodePopup
    successPopup: successPopup
  }

  interface Methods extends Playwright, FileSystem {
  }

  interface I extends ReturnType<stepsCommon>, WithTranslation<FileSystem> {
  }

  namespace Translation {

    interface Actions {
    }
  }
}
