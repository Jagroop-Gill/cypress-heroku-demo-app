export class FileDownloadPage {

    // Selectors
    fileDownloaderHeader = 'div#content h3';
    downloadLinks = 'div#content a';
    dropdownElement = 'select#dropdown';
    dropdownOptions = 'select#dropdown > option';

    // Actions
    visit() {
        cy.visit('/download');
    }
    
    checkIfPageLoaded() {
        cy.get(this.fileDownloaderHeader).contains('File Downloader')
            .should('be.visible');
    }

    getAllLinks() {
        return cy.get(this.downloadLinks);
    }

    getFirstLinkFromFileExtension(extension) {
        return this.getAllLinks().contains(extension).first();
    }

    getNameOfFirstFileGivenExtension(extension) {
        return this.getFirstLinkFromFileExtension(extension)
            .invoke('attr', 'href')
            .then((href) => {
                return href.split('/').pop();
            });
    }

    downloadFirstFileGivenExtension(extension) {
        this.getFirstLinkFromFileExtension(extension).click();
    }

    getDownloadedFileByName(fileName) {
        return cy.readFile(`cypress/downloads/${fileName}`);
    }


}