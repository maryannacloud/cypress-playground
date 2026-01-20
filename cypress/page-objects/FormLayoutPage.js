class FormLayoutsPage{

    /**
     * Method to submit Using the Grid form with user credts
     * @param {string} email - valid user email
     * @param {string} password - valied user password
     * @param {string} optionIndex - provide index of the Option radio button, starts with 0
     */
    submitUsingTheGridForm(email, password, optionIndex){
        cy.contains('nb-card', 'Using the Grid').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="radio"]').eq(optionIndex).check({force:true})
            cy.wrap(form).contains('Sign In')
        })
    }

    submitBasicForm(email, password, isCheckboxSelected) {
        cy.contains('nb-card', 'BAsic Form').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)

            if (isCheckboxSelected) {
                cy.wrap(form).find('[type="checkbox"]').check({force: true})
            }

            cy.wrap(form).contains('Submit')
        })
    }
}

export const onFormLayotsPage = new FormLayoutsPage()