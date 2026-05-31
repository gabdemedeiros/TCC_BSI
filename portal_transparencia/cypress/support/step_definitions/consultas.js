const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");
const { default: consultasPage } = require("../pages/consultas.page");

//Variável pra armazenar resposta de API
let respostaAPI;

//Evita que erros da aplicação interrompam a execução dos testes
Cypress.on('uncaught:exception', () => false);

//-------------------------------------PORTAL DA TRANSPARENCIA GERAL--------------------------------------------//

//Comportamento de usuário clicando no botão "DESPESAS"
Quando('o usuário clica em DESPESAS', () => {
  consultasPage.clicaDespesas();
});

//Comportamento de usuário clicando no botão "RECEITAS"
Quando('o usuário clica em RECEITAS', () => {
  consultasPage.clicaReceitas();
});

//Comportamento de usuário clicando no botão "RECURSOS HUMANOS"
Quando('o usuário clica em RECURSOS HUMANOS', () => {
  consultasPage.clicaRecursosHumanos();
});

//Comportamento de usuário clicando no botão "LICITAÇÕES E CONTRATOS"
Quando('o usuário clica em LICITACOES E CONTRATOS', () => {
  consultasPage.clicaLicitacoesContratos();
});

//Comportamento de usuário clicando no botão "RESPONSABILIDADE FISCAL"
Quando('o usuário clica em RESPONSABILIDADE FISCAL', () => {
  consultasPage.clicaResponsabilidadeFiscal();
});

//Comportamento de usuário clicando no botão "GESTÃO ESTADUAL"
Quando('o usuário clica em GESTAO ESTADUAL', () => {
  consultasPage.clicaGestaoEstadual();
});

//Comportamento de usuário clicando no botão "PARTICIPAÇÃO CIDADÃ"
Quando('o usuário clica em PARTICIPACAO CIDADA', () => {
  consultasPage.clicaParticipacaoCidada();
});