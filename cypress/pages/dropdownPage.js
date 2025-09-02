export class DropdownPage {

    // Selectors
    dropdownHeader = 'div#content h3';
    selectedInput = 'select#dropdown > option:selected';
    dropdownElement = 'select#dropdown';
    dropdownOptions = 'select#dropdown > option';

    // Actions
    visit() {
        cy.visit('/dropdown');
    }
    
    checkIfPageLoaded() {
        cy.get(this.dropdownHeader).contains('Dropdown List')
            .should('be.visible');
    }

    getSelectedInput() {
        return cy.get(this.selectedInput);
    }

    selectOptionFromDropdown(option) {
        cy.get(this.dropdownElement).select(option);
    }
}