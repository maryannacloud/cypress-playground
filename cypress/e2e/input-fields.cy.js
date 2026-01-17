/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it.only('input fields', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // .clear() method doesnt work on the web elements, located with the label attr
    cy.get('#inputEmail1').type('hello@test.com', {delay: 200}).clear().type('hello')
    cy.get('#inputEmail1').clear()
    
    cy.contains('nb-card', 'Using the Grid').contains('Email').type('Yes, it works!')
    cy.get('#inputEmail1').clear()

    // Text input with quotes - usage
    cy.contains('nb-card', 'Using the Grid').contains('Email').type("Yes, 'it' works!")
    cy.get('#inputEmail1').clear()
    cy.contains('nb-card', 'Using the Grid').contains('Email').type('Yes, "it" works!')
    cy.get('#inputEmail1').clear()

    // How to enter the value of the variable in the input field
    const name = 'Maryna'
    cy.contains('nb-card', 'Using the Grid').contains('Email').type(`${name}@test.com`)

    // How to assert the value in the field before modifying it
    cy.get('#inputEmail1').should('have.value', `${name}@test.com`).clear().type('test@test.com')
    cy.get('#inputEmail1').should('not.have.value', '').clear().type('test@test.com')
    .press(Cypress.Keyboard.Keys.TAB)

    // cy.contains('Auth').click()
    // cy.contains('Login').click()

    // cy.get('#input-email').type('test@test.com')
    // cy.get('#input-password').type('Welcome{emter}')
})