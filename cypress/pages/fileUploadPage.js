export class FileUploadPage {

    // Selectors
    fileUploaderHeader = 'div#content h3';
    chooseFileButton = 'input#file-upload';
    submitFileButton = 'input#file-submit';
    dragAndDropUploadDiv = 'div#drag-drop-upload';
    uploadedFileDiv = 'div#uploaded-files';
    dragAndDropFileName = 'div#drag-drop-upload span[data-dz-name]';

    // Actions
    visit() {
        cy.visit('/upload');
    }
    
    checkIfPageLoaded() {
        cy.get(this.fileUploaderHeader).contains('File Uploader')
            .should('be.visible');
    }

    getPageHeader() {
        return cy.get(this.fileUploaderHeader);
    }

    getChooseFileButton() {
        return cy.get(this.chooseFileButton);
    }

    clickUploadFileButton() {
        cy.get(this.submitFileButton).click();
    }

    getUploadedFileName() {
        return cy.get(this.uploadedFileDiv);
    }

    getDragAndDropBox() {
        return cy.get(this.dragAndDropUploadDiv);
    }

    getDragAndDropUploadedFileName() {
        return cy.get(this.dragAndDropFileName);
    }
}