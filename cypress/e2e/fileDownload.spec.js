import { FileDownloadPage } from "../pages/fileDownloadPage";

describe('File Download Page Tests', () => {
    const fileDownloadPage = new FileDownloadPage();  

    beforeEach(() => {
        fileDownloadPage.visit();
        fileDownloadPage.checkIfPageLoaded();

    });

    it('Verify links are present', () => {
        fileDownloadPage.getAllLinks()
            .should('exist');
    });

    it('Verify the user can download a file with the .txt extension', () => {
        const fileExtension = '.txt';

        fileDownloadPage.getNameOfFirstFileGivenExtension(fileExtension)
            .then((fileName) => {
                fileDownloadPage.downloadFirstFileGivenExtension(fileExtension);
                fileDownloadPage.getDownloadedFileByName(fileName)
                    .should('exist');
            });
    });

    it('Verify the user can download a file with the .png extension', () => {
        const fileExtension = '.png';

        fileDownloadPage.getNameOfFirstFileGivenExtension(fileExtension)
            .then((fileName) => {
                fileDownloadPage.downloadFirstFileGivenExtension(fileExtension);
                fileDownloadPage.getDownloadedFileByName(fileName)
                    .should('exist');
            });
    });

    it('Verify the user can download a file with the .xlsx extension', () => {
        const fileExtension = '.xlsx';

        fileDownloadPage.getNameOfFirstFileGivenExtension(fileExtension)
            .then((fileName) => {
                fileDownloadPage.downloadFirstFileGivenExtension(fileExtension);
                fileDownloadPage.getDownloadedFileByName(fileName)
                    .should('exist');
            });
    });

    it('Verify the user can download a file with the .jpg extension', () => {
        const fileExtension = '.jpg';

        fileDownloadPage.getNameOfFirstFileGivenExtension(fileExtension)
            .then((fileName) => {
                fileDownloadPage.downloadFirstFileGivenExtension(fileExtension);
                fileDownloadPage.getDownloadedFileByName(fileName)
                    .should('exist');
            });
    });

    it('Verify the user can download a file with the .pdf extension', () => {
        const fileExtension = '.pdf';

        fileDownloadPage.getNameOfFirstFileGivenExtension(fileExtension)
            .then((fileName) => {
                fileDownloadPage.downloadFirstFileGivenExtension(fileExtension);
                fileDownloadPage.getDownloadedFileByName(fileName)
                    .should('exist');
            });
    });

    it('Verify the user can download a file with the .jpeg extension', () => {
        const fileExtension = '.jpeg';

        fileDownloadPage.getNameOfFirstFileGivenExtension(fileExtension)
            .then((fileName) => {
                fileDownloadPage.downloadFirstFileGivenExtension(fileExtension);
                fileDownloadPage.getDownloadedFileByName(fileName)
                    .should('exist');
            });
    });

});
