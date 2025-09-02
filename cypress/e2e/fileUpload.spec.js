import { FileUploadPage } from "../pages/fileUploadPage";

describe('File Download Page Tests', () => {
    const fileUploadPage = new FileUploadPage();
    const exampleFileName = 'exampleFile.txt';
    const exampleFilePath = `./cypress/fixtures/${exampleFileName}`;

    beforeEach(() => {
        fileUploadPage.visit();
        fileUploadPage.checkIfPageLoaded();

    });

    it('Verify the user can upload a .txt file using buttons', () => {
        fileUploadPage.getChooseFileButton()
            .selectFile(exampleFilePath);

        fileUploadPage.clickUploadFileButton();

        fileUploadPage.getPageHeader()
            .should('have.text', 'File Uploaded!');

        fileUploadPage.getUploadedFileName()
            .should('contain', exampleFileName);
    });

    it('Verify the user can upload a .txt file using the drag and drop field', () => {
        fileUploadPage.getDragAndDropBox()
            .selectFile(exampleFilePath, {action: 'drag-drop'});

        fileUploadPage.getDragAndDropUploadedFileName()
            .should('contain', exampleFileName);

        fileUploadPage.clickUploadFileButton();

        fileUploadPage.getPageHeader()
            .should('have.text', 'File Uploaded!');

        fileUploadPage.getUploadedFileName()
            .should('contain', exampleFileName);
    });

});