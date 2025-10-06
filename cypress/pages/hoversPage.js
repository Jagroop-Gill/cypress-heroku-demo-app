import "cypress-real-events";

export class HoversPage {

    // Selectors
    hoversHeader = 'div#content h3';
    hoverableElement = 'div.figure';
    hiddenProfileInformation = 'div.figcaption';


    // Actions
    visit() {
        cy.visit('/hovers');
    }
    
    checkIfPageLoaded() {
        cy.get(this.hoversHeader).contains('Hovers')
            .should('be.visible');
    }

    getHoverableElement() {
        return cy.get(this.hoverableElement);
    }

    getHiddenProfileInformation(index) {
        return cy.get(this.hiddenProfileInformation).eq(index);
    }

   hoverOnElement(index) {
        this.getHoverableElement().eq(index).realHover()
   }
}