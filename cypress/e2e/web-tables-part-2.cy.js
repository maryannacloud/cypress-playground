/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it.only('web tables', () => {
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()
})