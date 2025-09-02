import { DragAndDropPage } from "../pages/dragAndDropPage";

describe('Drag and Drop Page Tests', () => {
    const dragAndDropPage = new DragAndDropPage();    

    beforeEach(() => {
        dragAndDropPage.visit();
        dragAndDropPage.checkIfPageLoaded();

    });

    it('Verify both column elements are in the correct order', () => {
        dragAndDropPage.getColumnAHeader()
            .should('have.text', 'A');
        
        dragAndDropPage.getColumnBHeader()
            .should('have.text', 'B');
    });

    it('Verify the column elements can be swapped by dragging and dropping', () => {
        dragAndDropPage.dragFirstColumnElementToSecondColumn();

        dragAndDropPage.getColumnAHeader()
            .should('have.text', 'B');
        
        dragAndDropPage.getColumnBHeader()
            .should('have.text', 'A');
    });
});
