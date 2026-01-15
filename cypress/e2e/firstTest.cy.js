/// <reference types="cypress" />
// Why the reference import above is needed?
// This reference enables VSCode IntelliSense to suggest available methods when we wright code
// We need to add this reference in every spec file

beforeEach('Open test application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('Hello world 1', () => {
    // by tag
    cy.get('input')

    // by ID value
    cy.get('#inputEmail')

    // by class value
    cy.get('.input-full-width')

    // by attribute
    cy.get('[fullwidth]')

    // by attribute with value
    cy.get('[placeholder="Email"]')

    // by entire class value
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition]')

    // how to combine several attributes
    cy.get('[placeholder="Email"][fullwidth]')
    cy.get('input[placeholder="Email]')

    // find by data-cy attribute
    cy.get('[data-cy="inputEmail1"]')
})