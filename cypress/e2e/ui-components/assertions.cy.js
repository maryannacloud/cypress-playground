/// <reference types="cypress" />

beforeEach('Open test application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('Assertions', () => {

    // The below two methods do the same thing - just different syntax
    // Keywork 'contain' is a partial assertion, if we want to assert an exact match we would have to use the 'have.text'
    // better not to use contains for the assertions, since it's primary role to aid in finding the web element by the text 
    cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address')

    cy.get('[for="exampleInputEmail1"]').then(label => {
        expect(label).to.have.text('Email address')
    })

    cy.get('[for="exampleInputEmail1"]').invoke('text').then(emailLabel => {
        expect(emailLabel).to.equal('Email address')
        cy.wrap(emailLabel).should('equal', 'Email address')
    })
})