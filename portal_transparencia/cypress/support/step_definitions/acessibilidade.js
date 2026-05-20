const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");
const { default: acessibilidadePage } = require("../pages/acessibilidade.page");

//Evita que erros da aplicação interrompam a execução dos testes
Cypress.on('uncaught:exception', () => false);

//Acessa o menu de acessibilidade
Quando('ele abre o menu de acessibilidade', () => {
  acessibilidadePage.acessaMenuAcessibilidade();

  // //Referencia inicial pro botão "reiniciar" no menu de acessibilidade
  // cy.get('body').invoke('css', 'filter').then((filter) => {
  //   filtroInicial = filter;
  // });
});

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

//---------------------------ESCALA DE CINZA---------------------------

//Clica no botão "Escala de Cinza"
Quando('clica em ESCALA DE CINZA', () => {
  acessibilidadePage.clicaEscalaDeCinza();
});

Entao('a interface deve estar em escala de cinza e acessível ao usuário', () => {
  acessibilidadePage.verificaEscalaDeCinza();
});

//---------------------------CONTRASTE NEGATIVO---------------------------

//Clica no botão "Contraste negativo"
Quando('clica em CONTRASTE NEGATIVO', () => {
  acessibilidadePage.clicaContrasteNegativo();
});

Entao('a interface deve estar em contraste negativo e acessível ao usuário', () => {
  acessibilidadePage.verificaContrasteNegativo();
});

// //---------------------------REINICIAR MENU ACESSIBILIDADE---------------------------

// Quando('clica em REINICIAR', () => {

//   //Clica no botão de "reiniciar"
//   cy.get('.pojo-a11y-btn-reset').click();

//   //Aguarda a aplicação aplicar escala de cinza na interface
//   cy.wait(800);
// });

// //Valida que o filtro foi resetado
// Entao('a interface deve voltar ao estado inicial', () => {

//   cy.get('body').invoke('css', 'filter').then((filtroAtual) => {
//     expect(filtroAtual).to.equal(filtroInicial);
//   });

// });

// //---------------------------MAPA DO SITE---------------------------

// Quando('clica em MAPA DO SITE', () => {

//   //Clica no botão de "mapa do site"
//   cy.get('.pojo-a11y-link-sitemap').click();

//   //Aguarda abrir a tela de "Mapa do Site"
//   cy.wait(800);
// });