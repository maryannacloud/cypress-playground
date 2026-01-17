/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

// By default, Cypress is configured to accept the browser-native alerts
it.only('dialog boxes', () => {
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    // 1. Using .on() method 
    // .on() will only work if the event - window:confirm - is triggered
    cy.get('.nb-trash').first().click()
    cy.on('window:confirm', confirm => {
        expect(confirm).to.equal('Are you sure you want to delete?')
    })

    // 2. Using .stub() method
    // .stub() - replaces browser-native window confirm function (aka accept alert function) 
    // with our own custom function, so we can further drive the behavior of this function ourselves

    // to accept the alert
    cy.window().then(win => {
        cy.stub(win, 'confirm').as('dialogBox').returns(true)
    })
    cy.get('.nb-trash').first().click()
    cy.get('@dialogBox').should('be.calledWith', 'Are you sure you want to delete?')

    // to cancel the alert
    cy.window().then(win => {
        cy.stub(win, 'confirm').as('dialogBox').returns(false)
    })
    cy.get('.nb-trash').first().click()
    cy.get('@dialogBox').should('be.calledWith', 'Are you sure you want to delete?')

})