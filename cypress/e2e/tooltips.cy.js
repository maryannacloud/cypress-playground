/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it.only('tooltips', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()

// Cypress doesnt have a .hover() method
// there is a .trigger() method instead, which can trigger the even that the web element is listening to  

    cy.contains('button', 'Top').trigger('mouseenter')
    cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
})