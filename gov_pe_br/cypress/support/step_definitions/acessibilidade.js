const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");
const { default: acessibilidadePage } = require("../pages/acessibilidade.page");

//Evita que erros da aplicação interrompam a execução dos testes
Cypress.on('uncaught:exception', () => false);


//---------------------------TAMANHO DE TEXTO---------------------------

//Aumenta tamanho de texto da plataforma
Quando('clica em AUMENTAR TEXTO', () => {
  acessibilidadePage.clicaAumentarTexto(); 
});

// Diminui tamanho de texto da plataforma
Quando('clica em DIMINUIR TEXTO', () => {
  acessibilidadePage.clicaDiminuirTexto();
});

//Verifica e compara a altura do body antes e depois da ação
Entao('o tamanho da fonte deve ser aumentado', () => {
  acessibilidadePage.verificaAumentoTexto();
});

//Verifica e compara a altura do body antes e depois da ação
Entao('o tamanho da fonte deve ser diminuido', () => {
  acessibilidadePage.verificaDiminuicaoTexto();
});

//---------------------------CONTRASTE NEGATIVO---------------------------

//Clica no botão "Contraste negativo"
Quando('clica em CONTRASTE NEGATIVO', () => {
  acessibilidadePage.clicaContrasteNegativo();
});

Entao('a interface deve estar em contraste negativo e acessível ao usuário', () => {
  acessibilidadePage.verificaContrasteNegativo();
});

