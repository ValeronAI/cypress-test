describe("Wrap testing", () => {
    it("Use builtin find command", () => {
        cy.visit("/");

        cy.get("[data-cypress-id=test-element-wrapper]")
			.find("[data-cypress-id=test-element]")
			.should("have.length", 2);
    });
    /** Use findByCypressId command instead of builtin find command
     * Functionality is equal but in case custom command test will fail
     */
    it("Use custom command findByCypressId", () => {
        cy.visit("/");

        cy.get("[data-cypress-id=test-element-wrapper]")
			.findByCypressId("test-element")
			.should("have.length", 2);

        // Custom command defined in commands.js:
        // Cypress.Commands.add(
        //     "findByCypressId",
        //     { prevSubject: true },
        //     (subject, selector, ...args) => {
        //         return cy.wrap(subject).find(`[data-cypress-id=${selector}]`, ...args);
        //     }
        // );
    });
});