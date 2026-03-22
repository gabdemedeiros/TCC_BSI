const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");

Cypress.on('uncaught:exception', () => false);

Dado('que o usuário acessa as despesas gerais do portal de transparência', () => {
  cy.visit('https://transparencia.pe.gov.br/despesas/menu-despesas/despesas-gerais/');
});

Quando('o usuário clica em todas as consultas sobre despesas', () => {
  cy.get('[data-block-id="056e1b8"]').click();
});

Quando('o usuário clica em Despesas Gerais', () => {
    cy.get('[data-block-id="37c1015"]').click();
});

Quando('o usuário filtra por ano' , () => {
     cy.getIframeBody('iframe[src*="pentaho"]')
    .find('#html_anoselector select')
    .select('2020');
});