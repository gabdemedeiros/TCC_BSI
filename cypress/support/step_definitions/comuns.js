const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");

//Acessa o portal da transparência
Dado('que o usuário acessa o portal de transparência', () => {
  cy.visit('https://transparencia.pe.gov.br/');
});