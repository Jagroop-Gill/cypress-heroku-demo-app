export class StatusCodesPage {

    // Selectors
    statusCodesHeader = 'div#content h3';
    statusCodeListElements = 'ul > li > a';
    pageParagraphElement = 'div#content p';

    // Actions
    visit() {
        cy.visit('/status_codes');
    }
    
    checkIfPageLoaded() {
        cy.get(this.statusCodesHeader).contains('Status Codes')
            .should('be.visible');
    }

    getStatusCodeListElements() {
        return cy.get(this.statusCodeListElements);
    }

    clickStatusCodeElement(statusCode) {
        cy.intercept({
            method: 'GET',
            url: `/status_codes/${statusCode}`
        }).as('waitForStatusCodeResponse');

        this.getStatusCodeListElements().contains(statusCode).click()
    }

    getPageParagraphText() {
        return cy.get(this.pageParagraphElement);
    }

}