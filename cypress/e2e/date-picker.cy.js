/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it.only('date-pickers', () => {
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()

    let date = new Date()
    date.setDate(date.getDate() + 5)
    let futureDay = date.getDate()
    let dateToAssert = `Jan ${futureDay}, 2026`

    cy.get('[placeholder="Form Picker"]').then(input => {
        cy.wrap(input).click()
        cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        cy.wrap(input).should('have.value', dateToAssert)
    })
})