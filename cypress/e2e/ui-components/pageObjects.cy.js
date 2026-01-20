/// <reference types ="cypress"/>

import { navigateTo } from "../../page-objects/navigationPage"

beforeEach('Open application', () => {
    cy.visits('/')
})

it('navogation test', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.toastrPage()
    navigateTo.tooltipPage()
})