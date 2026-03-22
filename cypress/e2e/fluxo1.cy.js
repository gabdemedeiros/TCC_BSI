describe('Consulta de despesas publicas', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Aumentar a letra do site', () => {

        cy.visit('https://transparencia.pe.gov.br/')

        cy.get('.pojo-a11y-toolbar-toggle-link').click()

        cy.get('.pojo-a11y-btn-resize-plus').click()

    });
});