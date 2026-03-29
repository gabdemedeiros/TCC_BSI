const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");

//Evita que erros da aplicação interrompam a execução dos testes
Cypress.on('uncaught:exception', () => false);

//Acessa o menu de acessibilidade
Quando('ele abre o menu de acessibilidade', () => {
  cy.get('.pojo-a11y-toolbar-toggle-link').click();
});

//Aumenta tamanho de texto da plataforma
Quando('clica em AUMENTAR TEXTO', () => {

  //Verifica e guarda a altura do body com referência
  cy.get('body').then(($el) => {
    //A altura é usada como indicador de aumento de texto
    //Pega o elemento DOM real, retorna o tamanho e posição da altura na tela
    alturaAntesAumentar = $el[0].getBoundingClientRect().height; 
  });

  //Clica no botão de "aumentar texto"
  cy.get('.pojo-a11y-btn-resize-plus').click();

  //Aguarda a aplicação aplicar aumento de texto na interface
  cy.wait(800);
});

// Diminui tamanho de texto da plataforma
Quando('clica em DIMINUIR TEXTO', () => {

  //Verifica e guarda a altura do body com referência
  cy.get('body').then(($el) => {
    //A altura é usada como indicador de diminuição de texto
    //Pega o elemento DOM real, retorna o tamanho e posição da altura na tela
    alturaAntesDiminuir = $el[0].getBoundingClientRect().height;
  });

  //Clica no botão de "diminuir texto"
  cy.get('.pojo-a11y-btn-resize-minus').click();

  //Aguarda a aplicação aplicar diminuição de texto na interface
  cy.wait(800);
});

//Verifica e compara a altura do body antes e depois da ação
Entao('o tamanho da fonte deve ser aumentado', () => {
  cy.get('body').should(($el) => {
    //Pega o elemento DOM real, depois de aumentar texto
    const alturaDepoisAumentar = $el[0].getBoundingClientRect().height;
    //Compara com o elemento antes do aumento e valida que é maior que o anterior
    expect(alturaDepoisAumentar).to.be.greaterThan(alturaAntesAumentar);
  });
});

//Verifica e compara a altura do body antes e depois da ação
Entao('o tamanho da fonte deve ser diminuido', () => {
  cy.get('body').should(($el) => {
    //Pega o elemento DOM real, depois de diminuir texto
    const alturaDepoisDiminuir = $el[0].getBoundingClientRect().height;
    //Compara com o elemento antes da diminuição e valida que é menor que o anterior
    expect(alturaDepoisDiminuir).to.be.lessThan(alturaAntesDiminuir);
  });
});