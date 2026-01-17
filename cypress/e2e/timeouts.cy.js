/// <reference types="cypress" />

beforeEach('Open test application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it.only('Timeouts', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()

    cy.contains('Open with delay 3 seconds').click()
    cy.get('nb-dialog-container nb-card-header').should('have.text', 'Friendly reminder')
    cy.contains('OK').click()

    cy.contains('Open with delay 10 seconds').click()
    cy.get('nb-dialog-container nb-card-header', {timeout: 11000}).should('have.text', 'Friendly reminder')
    cy.contains('OK').click()

    // Cypress has actionability check, when related to action commands
    // Cypress has a dafault timeout of 4 seconds and it can be configured on the Framework level or on the Command level
})