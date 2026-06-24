const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");
const { default: consultasPage } = require("../pages/consultas.page");

//Evita que erros da aplicação interrompam a execução dos testes
Cypress.on('uncaught:exception', () => false);

//-------------------------------------GOV PE GERAL--------------------------------------------//

//Acessa o portal da transparência
Dado('que o usuário acessa o portal do Governo de Pernambuco', () => {
  consultasPage.acessaPortal();
});

//Comportamento de usuário clicando no botão "SERVIÇOS"
Quando('o usuário clica em SERVIÇOS', () => {
  consultasPage.clicaServicos();
});

//Comportamento de usuário clicando no botão "NOTICIAS"
Quando('o usuário clica em NOTICIAS', () => {
  consultasPage.clicaNoticias();
});

//Comportamento de usuário clicando no botão "GOVERNO"
Quando('o usuário clica em GOVERNO', () => {
  consultasPage.clicaGoverno();
});

//Comportamento de usuário clicando no botão "INÍCIO"
Quando('o usuário clica em INÍCIO', () => {
  consultasPage.clicaInicio();
});