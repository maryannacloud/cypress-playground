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

it.only('Cypress locator methods', () => {
    // get() - to find elements on the page globally
    // find() - to find elements only child elements
    // contains() - to find elements by text, finds the first match on the page

    cy.contains('Sign In', {matchCase: false})
    cy.contains('[status="warning"]', 'Sign in')
    cy.contains('nb-card', 'Horizontal form').find('button')
    cy.contains('nb-card', 'Horizontal form').contains('Sign in')
    cy.contains('nb-card', 'Horizontal form').get('button')

})

it.only('Child Elements', () => {
    cy.contains('nb-card', 'Using the Grid').find('.row').find('button')
    cy.get('nb-card').find('nb-radio-group').contains('Option 1')

    // more reliable syntax - combine two locators in one with the space in between
    // retriability and auto-waiting feature of cypress
    // this type of syntax will work if the child element is somewjhere deep in the DOM in relation to the parent element
    cy.get('nb-card nb-radio-group').contains('Option 1')

    // if we need the child element that is in direct relation to the parent
    cy.get('nb-card > nb-card-body [placeholder="Jane Doe"]')
})

it.only('Parent Elements', () => {
    cy.get('#inputEmail1').parents('form').find('button')
    cy.contains('Using the Grid').parent().find('button')
    cy.get('#inputEmail1').parentsUntil('nb-card-body').find('button')
})

// fluent design interface - infinite method chaining
// catch: it is not recommended to continue the chain after the action command
it.only('Cypress Chains', () => {

    cy.get('#inputEmail1')
        .parents('form')
        .find('button')
        .click()
        .parents('form')
        .find('nb-radio')
        .first()
        .should('have.text', 'Option 1')
})