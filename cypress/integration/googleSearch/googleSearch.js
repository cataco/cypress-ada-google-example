import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(`I open Google page`, () => {
  cy.visit('');
});

When(`I see "Google" icon`, () => {
  cy.get('.lnXdpd').should('be.visible');
});

Then(`I see the search bar`, () => {
  cy.get(".gLFyf").should('be.visible');
});

And(`I can type in alphanumeric values in the search bar`, () => {
  const testValue = "Test 1";
  cy.insertValueInSearchBar(testValue);
});