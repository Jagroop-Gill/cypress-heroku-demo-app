export class DragAndDropPage {

    // Selectors
    dragAndDropHeader = 'div#content h3';
    columnA = 'div#column-a';
    columnB = 'div#column-b';
    columnAHeader = 'div#column-a > header';
    columnBHeader = 'div#column-b > header';


    // Actions
    visit() {
        cy.visit('/drag_and_drop');
    }
    
    checkIfPageLoaded() {
        cy.get(this.dragAndDropHeader).contains('Drag and Drop')
            .should('be.visible');
    }

    getColumnAHeader() {
        return cy.get(this.columnAHeader);
    }

    getColumnBHeader() {
        return cy.get(this.columnBHeader);
    }

    dragFirstColumnElementToSecondColumn() {
        cy.dragNDrop(this.columnA, this.columnB);
    }
}