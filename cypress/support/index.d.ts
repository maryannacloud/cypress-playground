declare namespace Cypress {
    interface Chainable{
        /**
         * Command to open Home Page
         */
        openHomePage(): Chainable<void>
    }
}