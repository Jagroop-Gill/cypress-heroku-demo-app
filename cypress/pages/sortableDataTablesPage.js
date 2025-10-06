export class SortableDataTablesPage {

    // Selectors
    sortableDataTablesHeader = 'div#content h3';
    tables = 'table.tablesorter';
    tableOne = 'table#table1';
    tableOneHeaders = 'table#table1 > thead th';
    tableOneBody = 'table#table1 > tbody > tr > td';
    tableTwo = 'table#table2';
    tableTwoHeaders = 'table#table2 > thead th';
    tableTwoBody = 'table#table2 > tbody > tr > td';


    // Actions
    visit() {
        cy.visit('/tables');
    }
    
    checkIfPageLoaded() {
        cy.get(this.sortableDataTablesHeader).contains('Data Tables')
            .should('be.visible');
    }

    getAllTables() {
        return cy.get(this.tables);
    }

    getTableOne() {
        return cy.get(this.tableOne);
    }
    getTableOneHeaders() {
        return cy.get(this.tableOneHeaders).then(($headers) => {
            return $headers.toArray().map((th) => th.innerText.trim());
        });
    }

    getTableTwo() {
        return cy.get(this.tableTwo);
    }

    getTableTwoHeaders() {
        return cy.get(this.tableTwoHeaders).then(($headers) => {
            return $headers.toArray().map((th) => th.innerText.trim());
        });
    }

    clickTableOneHeader(headerText) {
        return cy.get(this.tableOneHeaders).contains(headerText).click();
    }

    clickTableTwoHeader(headerText) {
        return cy.get(this.tableTwoHeaders).contains(headerText).click();
    }

    getTableOneColumnValues(columnNumber) {
        return cy.get(this.tableOneBody + `:nth-child(${columnNumber})`).then(($columnEntries) => {
            return $columnEntries.toArray().map((columnEntry) => columnEntry.innerText.trim());
        });
    }

    getTableTwoColumnValues(columnNumber) {
        return cy.get(this.tableTwoBody + `:nth-child(${columnNumber})`).then(($columnEntries) => {
            return $columnEntries.toArray().map((columnEntry) => columnEntry.innerText.trim());
        });
    }

    getSortedColumnValues(columnNumber) {
        return this.getTableOneColumnValues(columnNumber).then((columnValues) => {
            return columnValues.sort();
        });
    }

    getReverseSortedColumnValues(columnNumber) {
        return this.getTableOneColumnValues(columnNumber).then((columnValues) => {
            return columnValues.sort().reverse();
        });
    }

    getSortedNumericalColumnValues(columnNumber) {
        return this.getTableOneColumnValues(columnNumber).then((columnValues) => {
            let sortedNumbers = columnValues.map((value) => parseFloat(value.slice(1)).toFixed(2)).sort((a,b) => a - b);
            console.log(sortedNumbers)
            return sortedNumbers.map((number) =>`$${number.toString()}`);
        });
    }

    getReverseSortedNumericalColumnValues(columnNumber) {
        return this.getTableOneColumnValues(columnNumber).then((columnValues) => {
            let sortedNumbers = columnValues.map((value) => parseFloat(value.slice(1)).toFixed(2)).sort((a,b) => b - a);
            return sortedNumbers.map((number) =>`$${number.toString()}`);
        });
    }

}