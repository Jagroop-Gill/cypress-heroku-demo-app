import { JavaScriptAlertsPage } from "../pages/javascriptAlertsPage";

describe('JavaScript Alerts Page Tests', () => {
    const javascriptAlertsPage = new JavaScriptAlertsPage();    

    beforeEach(() => {
        javascriptAlertsPage.visit();
        javascriptAlertsPage.checkIfPageLoaded();

    });

    it('Verify the results section begins in an empty state', () => {
        javascriptAlertsPage.getResultsParagraph()
            .should('be.empty');
    });

    it('Verify the JavaScript alert appears and saves user response', () => {
        javascriptAlertsPage.clickAndAcceptJavaScriptAlert();
        javascriptAlertsPage.getResultsParagraph()
            .should('have.text', 'You successfully clicked an alert');

    });

    it('Verify the JavaScript confirm appears and saves user confirmation', () => {
        javascriptAlertsPage.clickJSConfirmButtonAndAgree();
        javascriptAlertsPage.getResultsParagraph()
            .should('have.text', 'You clicked: Ok');
    });

    it('Verify the JavaScript confirm appears and saves user denial', () => {
        javascriptAlertsPage.clickJSConfirmButtonAndDeny();
        javascriptAlertsPage.getResultsParagraph()
            .should('have.text', 'You clicked: Cancel');
    });

    it('Verify the JavaScript prompt appears and saves user response', () => {
        let promptString = 'This is a testing sentence.';
        javascriptAlertsPage.clickJSPromptButtonAndRespond(promptString);
        javascriptAlertsPage.getResultsParagraph()
            .should('have.text', 'You entered: ' + promptString);

    });

    it('Verify the JavaScript prompt appears and saves a null user response', () => {
        let promptString = null;
        javascriptAlertsPage.clickJSPromptButtonAndRespond(promptString);
        javascriptAlertsPage.getResultsParagraph()
            .should('have.text', 'You entered: ' + promptString);

    });

    it('Verify the JavaScript prompt appears and saves an empty user response', () => {
        let promptString = '';
        javascriptAlertsPage.clickJSPromptButtonAndRespond(promptString);
        javascriptAlertsPage.getResultsParagraph()
            .should('have.text', 'You entered: ' + promptString);

    });

});