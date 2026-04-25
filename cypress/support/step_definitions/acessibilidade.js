const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");

let estadoInicial = {};

//Evita que erros da aplicação interrompam a execução dos testes
Cypress.on('uncaught:exception', () => false);

//--------------------------------COMUM---------------------------------

//Acessa o menu de acessibilidade
Quando('ele abre o menu de acessibilidade', () => {
  cy.get('.pojo-a11y-toolbar-toggle-link').click();

  //Referencia inicial pro botão "reiniciar" no menu de acessibilidade
  cy.get('body').invoke('css', 'filter').then((filter) => {
    filtroInicial = filter;
  });
});

//---------------------------TAMANHO DE TEXTO---------------------------

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

//---------------------------ESCALA DE CINZA---------------------------

//Clica no botão "Escala de Cinza"
Quando('clica em ESCALA DE CINZA', () => {

  //Clica no botão de "aumentar texto"
  cy.get('.pojo-a11y-btn-grayscale').click();

  //Aguarda a aplicação aplicar escala de cinza na interface
  cy.wait(800);
});

Entao('a interface deve estar em escala de cinza e acessível ao usuário', () => {
  cy.get('body').should(($el) => {
    //Pega o elemento DOM real, depois de alterar escala para cinza
    const escalaCinza = $el.css('filter');

    //Valida que o filtro mudou para escala de cinza
    expect(escalaCinza).to.include('grayscale');
  });

  //Valida que os elementos svg continuam visíveis
  cy.get('svg').each(($el) => {

  const fill = $el.css('fill');
  const opacity = $el.css('opacity');

  //não pode estar totalmente transparente
  expect(opacity).to.not.equal('0');

  //não pode estar sem cor
  expect(fill).to.not.equal('none');

  //não pode ser transparente
  expect(fill).to.not.equal('rgba(0, 0, 0, 0)');
  })
});

//---------------------------CONTRASTE NEGATIVO---------------------------

//Clica no botão "Contraste negativo"
Quando('clica em CONTRASTE NEGATIVO', () => {

  //Clica no botão de "contraste negativo"
  cy.get('.pojo-a11y-btn-negative-contrast').click();

  //Aguarda a aplicação aplicar contraste negativo na interface
  cy.wait(800);
});

Entao('a interface deve estar em contraste negativo e acessível ao usuário', () => {

  //Valida que o contraste ficou negativo
  cy.get('body').should('have.class', 'pojo-a11y-negative-contrast');

  //Valida que os elementos svg continuam visíveis
  cy.get('svg').each(($el) => {

    const fill = $el.css('fill');
    const opacity = $el.css('opacity');

    //não pode estar totalmente transparente
    expect(opacity).to.not.equal('0');

    //não pode estar sem cor
    expect(fill).to.not.equal('none');

    //não pode ser transparente
    expect(fill).to.not.equal('rgba(0, 0, 0, 0)');

    cy.contains('LICITAÇÕES E CONTRATOS')
      .should('be.visible');

    cy.contains('LICITAÇÕES E ATAS DE REGISTRO DE PREÇO')
      .should('be.visible');

    cy.contains('CONTRATOS')
      .should('be.visible');

    cy.contains('FORNECEDORES')
      .should('be.visible');
  })

  //Aguarda a aplicação aplicar contraste negativo  na interface
  cy.wait(4000);
});

//---------------------------REINICIAR MENU ACESSIBILIDADE---------------------------

Quando('clica em REINICIAR', () => {

  //Clica no botão de "reiniciar"
  cy.get('.pojo-a11y-btn-reset').click();

  //Aguarda a aplicação aplicar escala de cinza na interface
  cy.wait(800);
});

//Valida que o filtro foi resetado
Entao('a interface deve voltar ao estado inicial', () => {

  cy.get('body').invoke('css', 'filter').then((filtroAtual) => {
    expect(filtroAtual).to.equal(filtroInicial);
  });

});

//---------------------------MAPA DO SITE---------------------------

Quando('clica em MAPA DO SITE', () => {

  //Clica no botão de "mapa do site"
  cy.get('.pojo-a11y-link-sitemap').click();

  //Aguarda abrir a tela de "Mapa do Site"
  cy.wait(800);
});