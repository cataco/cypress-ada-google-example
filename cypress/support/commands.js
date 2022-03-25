const searchBarLocator = "input.gLFyf";

Cypress.Commands.add("insertValueInSearchBar", (testValue) => {
    cy.get(searchBarLocator).clear({ force: true }).type(testValue, { force: true });
    cy.get(searchBarLocator).should("have.value", testValue).then(() => {
        cy.get(".wM6W7d").first().click();
    });
})