import { FormAuthenticationPage } from "../pages/formAuthenticationPage";

describe('Form Authentication Page Tests', () => {
    const formAuthenticationPage = new FormAuthenticationPage();
    const correctUsername = 'tomsmith';
    const correctPassword = 'SuperSecretPassword!';

    beforeEach(() => {
        formAuthenticationPage.visit();
        formAuthenticationPage.checkIfPageLoaded();

    });

    it('Verify the user cannot enter without inputting login information', () => {
        formAuthenticationPage.clickLoginButton();
        formAuthenticationPage.getFlashAlertMessage()
            .should('contain', 'Your username is invalid');
    });

    it('Verify the user cannot enter with invalid login information', () => {
        formAuthenticationPage.enterUsernameAndPassword('incorrect_username', 'incorrect_password');
        formAuthenticationPage.clickLoginButton();        
        formAuthenticationPage.getFlashAlertMessage()
            .should('contain', 'Your username is invalid');
    });

    it('Verify the user cannot login without a valid password', () => {
        formAuthenticationPage.enterUsernameAndPassword(correctUsername, 'incorrect_password');
        formAuthenticationPage.clickLoginButton();
        formAuthenticationPage.getFlashAlertMessage()
            .should('contain', 'Your password is invalid!');
    });

    it('Verify the user can login with valid login information and log out', () => {
        formAuthenticationPage.enterUsernameAndPassword(correctUsername, correctPassword);
        formAuthenticationPage.clickLoginButton();
        formAuthenticationPage.getFlashAlertMessage()
            .should('contain', 'You logged into a secure area!');

        formAuthenticationPage.clickLogoutButton();
        formAuthenticationPage.checkIfPageLoaded();
    });

});