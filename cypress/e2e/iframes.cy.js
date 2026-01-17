/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it('iframes', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()

    cy.frameLoaded('[data-cy="esc-close-iframe"]')
    cy.iframe('[data-cy="esc-close-iframe"]').contains('Open Dialog with esc close').click()
    cy.contains('Dismiss Dialog').click()

    cy.enter('[data-cy="esc-close-iframe"]').then(getBody => {
        getBody().contains('Open Dialog with esc close').click()
        cy.contains('Dismiss Dialog').click()
        getBody().contains('Open Dialog without esc close').click()
        cy.contains('OK').click()
    })
})