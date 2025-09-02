export class CheckboxesPage {

    // Selectors
    checkboxesHeader = 'div#content h3';
    checkboxElement = 'form#checkboxes input[type="checkbox"]';

    // Actions
    visit() {
        cy.visit('/checkboxes');
    }
    
    checkIfPageLoaded() {
        cy.get(this.checkboxesHeader).contains('Checkboxes')
            .should('be.visible');
    }

    getFirstCheckBox() {
        return cy.get(this.checkboxElement).first();
    }

    getLastCheckBox() {
        return cy.get(this.checkboxElement).last();
    }

    clickBothCheckBoxes() {
        this.getFirstCheckBox().click();
        this.getLastCheckBox().click();
    }
}