/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it('checkboxes', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    cy.get('[type="checkbox"]').click({force:true, multiple:true})
    cy.get('[type="checkbox"]').check({force:true})
    cy.get('[type="checkbox"]').uncheck({force:true})
    cy.get('[type="checkbox"]').check({force:true}).should('be.checked')
})