/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it('drag and drop', () => {
    cy.contains('Extra Components').click()
    cy.contains('Drag & Drop').click()

    cy.get('#todo-list div').first().trigger('dragstart')
    cy.get('#drop-list').trigger('drop')
})