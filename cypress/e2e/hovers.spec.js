import { HoversPage } from "../pages/hoversPage";

describe('Hovers Page Tests', () => {
    const hoversPage = new HoversPage();    

    beforeEach(() => {
        hoversPage.visit();
        hoversPage.checkIfPageLoaded();

    });

    it('Verify three hoverable sections are visible', () => {
        hoversPage.getHoverableElement()
            .should('have.length', 3);
    });

    it('Verify that any hidden profile information is not visible', () => {
        hoversPage.getHiddenProfileInformation(0)
            .should('not.be.visible');
        hoversPage.getHiddenProfileInformation(1)
            .should('not.be.visible');
        hoversPage.getHiddenProfileInformation(2)
            .should('not.be.visible');
    });

    it('Verify the user can see the hidden profile information when hovering', () => {
        hoversPage.hoverOnElement(0)
        hoversPage.getHiddenProfileInformation(0)
            .should('be.visible');

        hoversPage.hoverOnElement(1)
        hoversPage.getHiddenProfileInformation(1)
            .should('be.visible');

        hoversPage.hoverOnElement(2)
        hoversPage.getHiddenProfileInformation(2)
            .should('be.visible');
    });
});