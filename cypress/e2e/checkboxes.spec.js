import { CheckboxesPage } from "../pages/checkboxesPage";

describe('Checkboxes Page Tests', () => {
    const checkboxesPage = new CheckboxesPage();    

    beforeEach(() => {
        checkboxesPage.visit();
        checkboxesPage.checkIfPageLoaded();

    });

    it('Verify two checkboxes are visible', () => {
        cy.get(checkboxesPage.checkboxElement)
            .should('have.length', 2);
    });

    it('Verify the second checkbox is checked and the first is unchecked', () => {
        checkboxesPage.getFirstCheckBox()
            .should('not.be.checked');
        
        checkboxesPage.getLastCheckBox()
            .should('be.checked');
    });

    it('Verify the user can check the first checkbox and uncheck the second checkbox', () => {
        checkboxesPage.clickBothCheckBoxes();

        checkboxesPage.getFirstCheckBox()
            .should('be.checked');
        
        checkboxesPage.getLastCheckBox()
            .should('not.be.checked');
    });
});