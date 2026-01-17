/// <reference types="cypress"/>

beforeEach('Open.application', () => {
    cy.visit('/')
})

it.only('radio buttons', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(allRadioButtons => {
        // 'force:true' is a hack to bypass the cypress native actionability check
        cy.wrap(allRadioButtons).eq(0).check({force:true}).should('be.checked')
        cy.wrap(allRadioButtons).eq(1).check({force:true})
        cy.wrap(allRadioButtons).eq(0).should('not.be.checked')
        cy.wrap(allRadioButtons).eq(2).should('be.disabled')
        
        // .check() is recommended to use for radio buttons, rather than .click()
        cy.contains('nb-card', 'Using the Grid').contains('label','Option 1').find('input').check({force:true})
    })
})