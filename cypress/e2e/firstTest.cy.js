/// <reference types="cypress" />
// Why the reference import above is needed?
// This reference enables VSCode IntelliSense to suggest available methods when we wright code
// We need to add this reference in every spec file

beforeEach('Open test application', () => {
    cy.visit('/')
})

it('Hello world 1', () => {

})