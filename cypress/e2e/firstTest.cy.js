/// <reference types="cypress" />
// Why the reference import above is needed?
// This reference enables VSCode IntelliSense to suggest available methods when we wright code
// We need to add this reference in every spec file

beforeEach('Open test application', () => {
    cy.visit('/')
})

it('Hello world 1', () => {

})

it('Hello world 2', () => {

})

it('Hello world 3', () => {

})

it('Hello world 4', () => {

})

describe('Test Suite 1', () => {

    beforeEach('Open test application', () => {
        cy.visit('/')
    })

    it('Hello world 3', () => {

    })

    it('Hello world 4', () => {

    })

    afterEach('Close the application', () => {
        
    })
})

describe('Test Suite 2', () => {
    it('Hello world 5', () => {

    })

    it('Hello world 6', () => {

    })
})