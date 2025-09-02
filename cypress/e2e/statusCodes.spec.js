import { StatusCodesPage } from "../pages/statusCodesPage";

describe('Status Code Tests', () => {
    const statusCodesPage = new StatusCodesPage();

    beforeEach(() => {
        statusCodesPage.visit();
        statusCodesPage.checkIfPageLoaded();

    });

    it('Verify the four status code links are present', () => {
        statusCodesPage.getStatusCodeListElements()
            .should('have.length', 4);
    });

    it('Verify the page correctly displays a 200 status code', () => {
        const statusCode = 200;
        statusCodesPage.clickStatusCodeElement(statusCode);

        cy.wait('@waitForStatusCodeResponse').its('response.statusCode')
            .should('eq', statusCode);

        statusCodesPage.getPageParagraphText()
            .should('contain', `This page returned a ${statusCode} status code.`)
        
    });

    it('Verify the page correctly displays a 301 status code', () => {
        const statusCode = 301;
        statusCodesPage.clickStatusCodeElement(statusCode);

        cy.wait('@waitForStatusCodeResponse').its('response.statusCode')
            .should('eq', statusCode);

        statusCodesPage.getPageParagraphText()
            .should('contain', `This page returned a ${statusCode} status code.`)
    });

    it('Verify the page correctly displays a 404 status code', () => {
        const statusCode = 404;
        statusCodesPage.clickStatusCodeElement(statusCode);

        cy.wait('@waitForStatusCodeResponse').its('response.statusCode')
            .should('eq', statusCode);

        statusCodesPage.getPageParagraphText()
            .should('contain', `This page returned a ${statusCode} status code.`)
    });

    it('Verify the page correctly displays a 500 status code', () => {
        const statusCode = 500;
        statusCodesPage.clickStatusCodeElement(statusCode);

        cy.wait('@waitForStatusCodeResponse').its('response.statusCode')
            .should('eq', statusCode);

        statusCodesPage.getPageParagraphText()
            .should('contain', `This page returned a ${statusCode} status code.`)
    });

});