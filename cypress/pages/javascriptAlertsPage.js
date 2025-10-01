export class JavaScriptAlertsPage {

    // Selectors
    javascriptAlertsHeader = 'div#content h3';
    resultsParagraph = 'p#result';
    javascriptAlertButton = 'ul > li > button';


    // Actions
    visit() {
        cy.visit('/javascript_alerts');
    }
    
    checkIfPageLoaded() {
        cy.get(this.javascriptAlertsHeader).contains('JavaScript Alerts')
            .should('be.visible');
    }

    getResultsParagraph() {
        return cy.get(this.resultsParagraph);
    }

    clickJSAlertButton() {
        cy.get(this.javascriptAlertButton).contains("Click for JS Alert").click();
    }

    clickJSConfirmButton() {
        cy.get(this.javascriptAlertButton).contains("Click for JS Confirm").click();
    }

    clickJSPromptButton() {
        cy.get(this.javascriptAlertButton).contains("Click for JS Prompt").click();
    }

    clickJSConfirmButtonAndAgree() {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('I am a JS Confirm')
            return true;
        });
        this.clickJSConfirmButton();
    }

    clickJSConfirmButtonAndDeny() {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('I am a JS Confirm')
            return false;
        });

        this.clickJSConfirmButton();
    }

    clickJSPromptButtonAndRespond(promptString) {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(promptString).as('prompt')
        })
        this.clickJSPromptButton();

        cy.get('@prompt').should('have.been.calledWith', 'I am a JS prompt');
    }
}