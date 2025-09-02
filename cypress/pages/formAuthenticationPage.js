export class FormAuthenticationPage {

    // Selectors
    formAuthenticationHeader = 'div#content h2';
    usernameInput = 'input#username';
    passwordInput = 'input#password';
    loginButton = 'button[type="submit"]';
    flashAlertMessage = 'div#flash';
    logoutButton = 'a[href="/logout"]';
    

    // Actions
    visit() {
        cy.visit('/login');
    }
    
    checkIfPageLoaded() {
        cy.get(this.formAuthenticationHeader).contains('Login Page')
            .should('be.visible');
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    enterUsernameAndPassword(username, password) {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(password);
    }

    getFlashAlertMessage() {
        return cy.get(this.flashAlertMessage);
    }

    clickLogoutButton() {
        cy.get(this.logoutButton).click();
    }

}