/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it.only('lists and dropdowns', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    // native dropdowns
    cy.contains('div', 'Toast type:').find('select').select('info').should('have.value', 'info')

    // custom dropdowns
    cy.contains('div', 'Position:').find('nb-select').click()
    cy.get('.option-list').contains('bottom-right').click()
    cy.contains('div', 'Position:').find('nb-select').should('have.text', 'bottom-right')

    cy.contains('div', 'Position:').find('nb-select').then(dropdown => {
        cy.wrap(dropdown).click()
        // at this point - cy.get('.option-list nb-option') - Cypress has remembered the list of dropdown options
        cy.get('.option-list nb-option').each((option, index, list) => {
            cy.wrap(option).click()
            // at this point the dropdown has collapsed
            // but the loop tries to continue selecting from the dropdown
            // and it cannot do it
            if (index < list.length - 1) {
                cy.wrap(dropdown).click()
            }
        })
    })

    // if, as a results of any action command, the DOM changed,
    // but Cypress remembered this DOM snapshot,
    // and if the web page doesnt match what Cypress remembered,
    // we will see sn error, stating "Subject is no longer attached to the DOM"
    // Why?
    // When we are selecting a value form a dropdown, the dropdown collapses right after,
    // and in order for us to continue our loop and continue selecting options from the dropdown
})