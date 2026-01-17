/// <reference types="cypress" />

beforeEach('Open test application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it.only('Reusing Locators', () => {

    // traditional approach with saving the locators into vars
    // THIS BELOW WILL NOT WORK
    // const inputEmail = cy.get('#inputEmail1')
    // inputEmail.parents('form').find('button')
    // inputEmail.parents('form').find('nb-radio')

    // 1. Cypress Alias - smart global variable
    // cy.get('#inputEmail1').as('inputEmail1')
    // cy.get('@inputEmial1').parents('form').find('button')
    // cy.get('@inputEmail1').parents('form').find('nb-radio')

    // 2. Cypress .then() method
    // below syntax will not work:
    // cy.get('#inputEmail1').then(inputEmail => {
    //     inputEmail.parents('form').find('button')
    // })

    // .then() retruns JQuery Object
    // using cy.wrap to convert from JQuery into the Cypress context
    // we cannot use return statement within .then() method
    cy.get('#inputEmail1').then(inputEmail => {
        cy.wrap(inputEmail).parents('form').find('button')
        cy.wrap(inputEmail).parents('form').find('nb-radio')
        cy.wrap('Hello').should('equal', 'Hello')
        cy.wrap(inputEmail).as('inputEmail2')
    })

    cy.get('@inputEmail2').click()
})