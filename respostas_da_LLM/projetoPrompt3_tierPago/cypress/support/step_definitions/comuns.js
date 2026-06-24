const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");
const { default: ComunsPage } = require("../pages/comuns.page");

//Acessa o portal da transparência
Dado('que o usuário acessa o portal do Governo de Pernambuco', () => {
  ComunsPage.acessaPortal();
});