it('loads the app', () => {
    cy.visit('/')
    cy.get('.todoapp').should('be.visible')
})