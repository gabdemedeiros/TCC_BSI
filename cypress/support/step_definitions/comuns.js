const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");
const { default: ComunsPage } = require("../pages/comuns.page");

//Evita que erros da aplicação interrompam a execução dos testes
Cypress.on('uncaught:exception', () => false);

//Acessa o portal da transparência
Dado('que o usuário acessa o portal de transparência', () => {
  ComunsPage.acessaPortal();
});