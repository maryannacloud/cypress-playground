/// <reference types ="cypress"/>

import { onDatePickerPage } from "../../page-objects/DatePickerPage"
import { onFormLayotsPage } from "../../page-objects/FormLayoutPage"

beforeEach('Open application', () => {
    cy.openHomePage()
})

it('navigation test', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.toastrPage()
    navigateTo.tooltipPage()
})

it('submit form test', () => {
    navigateTo.formLayoutsPage()
    onFormLayotsPage.submitUsingTheGridForm('test@test.com', 'Welcome', 0)
    onFormLayotsPage.submitBasicForm('artem@test.com', 'Welcome', true)
    navigateTo.datePickerPage()
    onDatePickerPage.selectCommonDatepickerDateFromToday(5)
    onDatePickerPage.selectRangePickerDateFromToday(10, 50)
})