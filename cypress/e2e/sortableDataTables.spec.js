import { SortableDataTablesPage } from "../pages/sortableDataTablesPage";

describe('Sortable Data Table Page Tests', () => {
    const sortableDataTablesPage = new SortableDataTablesPage();    

    beforeEach(() => {
        sortableDataTablesPage.visit();
        sortableDataTablesPage.checkIfPageLoaded();

    });

    it('Verify two tables are present', () => {
        sortableDataTablesPage.getAllTables()
            .should('have.length', 2);
    });

    it('Verify the headers for both tables are correct', () => {
        const expectedHeaders = ['Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action'];

        sortableDataTablesPage.getTableOneHeaders().then((headers) => {
            expect(headers).to.deep.equal(expectedHeaders);
        });
        
        sortableDataTablesPage.getTableTwoHeaders().then((headers) => {
            expect(headers).to.deep.equal(expectedHeaders);
        });

    });

    it('Verify both tables can be sorted alphabetically by last name', () => {
        sortableDataTablesPage.getSortedColumnValues(1).then((sortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('Last Name');
            sortableDataTablesPage.getTableOneColumnValues(1).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('Last Name');
            sortableDataTablesPage.getTableTwoColumnValues(1).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
        });

        sortableDataTablesPage.getReverseSortedColumnValues(1).then((reverseSortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('Last Name');
            sortableDataTablesPage.getTableOneColumnValues(1).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('Last Name');
            sortableDataTablesPage.getTableTwoColumnValues(1).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
        });

    });

    it('Verify both tables can be sorted alphabetically by first name', () => {
        sortableDataTablesPage.getSortedColumnValues(2).then((sortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('First Name');
            sortableDataTablesPage.getTableOneColumnValues(2).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('First Name');
            sortableDataTablesPage.getTableTwoColumnValues(2).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
        });

        sortableDataTablesPage.getReverseSortedColumnValues(2).then((reverseSortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('First Name');
            sortableDataTablesPage.getTableOneColumnValues(2).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('First Name');
            sortableDataTablesPage.getTableTwoColumnValues(2).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
        });
    });

    it('Verify both tables can be sorted alphabetically by email', () => {
        sortableDataTablesPage.getSortedColumnValues(3).then((sortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('Email');
            sortableDataTablesPage.getTableOneColumnValues(3).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('Email');
            sortableDataTablesPage.getTableTwoColumnValues(3).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
        });

        sortableDataTablesPage.getReverseSortedColumnValues(3).then((reverseSortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('Email');
            sortableDataTablesPage.getTableOneColumnValues(3).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('Email');
            sortableDataTablesPage.getTableTwoColumnValues(3).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
        });
    });

    it('Verify both tables can be sorted by amount due', () => {
        sortableDataTablesPage.getSortedNumericalColumnValues(4).then((sortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('Due');
            sortableDataTablesPage.getTableOneColumnValues(4).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('Due');
            sortableDataTablesPage.getTableTwoColumnValues(4).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
        });

        sortableDataTablesPage.getReverseSortedNumericalColumnValues(4).then((reverseSortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('Due');
            sortableDataTablesPage.getTableOneColumnValues(4).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('Due');
            sortableDataTablesPage.getTableTwoColumnValues(4).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
        });
    });

    it('Verify both tables can be sorted alphabetically by web site name', () => {
        sortableDataTablesPage.getSortedColumnValues(5).then((sortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('Web Site');
            sortableDataTablesPage.getTableOneColumnValues(5).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('Web Site');
            sortableDataTablesPage.getTableTwoColumnValues(5).then((columnValues) => {
                expect(columnValues).to.deep.equal(sortedColumnValues);
            });
        });

        sortableDataTablesPage.getReverseSortedColumnValues(5).then((reverseSortedColumnValues) => {
            sortableDataTablesPage.clickTableOneHeader('Web Site');
            sortableDataTablesPage.getTableOneColumnValues(5).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
            sortableDataTablesPage.clickTableTwoHeader('Web Site');
            sortableDataTablesPage.getTableTwoColumnValues(5).then((columnValues) => {
                expect(columnValues).to.deep.equal(reverseSortedColumnValues);
            });
        });
    });

});