import { DropdownPage } from "../pages/dropdownPage";

describe('Dropdown Page Tests', () => {
    const dropdownPage = new DropdownPage();    

    beforeEach(() => {
        dropdownPage.visit();
        dropdownPage.checkIfPageLoaded();

    });

    it('Verify the dropdown begins with "Please select an option"', () => {
        dropdownPage.getSelectedInput()
            .should('have.text', 'Please select an option');
    });

    it('Verify the user can select each from the dropdown', () => {
        dropdownPage.selectOptionFromDropdown('Option 1');
        dropdownPage.getSelectedInput()
            .should('have.text', 'Option 1');

        dropdownPage.selectOptionFromDropdown('Option 2');
        dropdownPage.getSelectedInput()
            .should('have.text', 'Option 2');
    });
});
