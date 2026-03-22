const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");

Cypress.on('uncaught:exception', () => false);

Dado('que o usuário acessa o portal de transparência', () => {
  cy.visit('https://transparencia.pe.gov.br/');
});

Quando('ele abre o menu de acessibilidade', () => {
  cy.get('.pojo-a11y-toolbar-toggle-link').click();
});

Quando('clica em aumentar texto', () => {
  cy.get('body').then(($el) => {
    alturaAntesAumentar = $el[0].getBoundingClientRect().height;
  });

  cy.get('.pojo-a11y-btn-resize-plus').click();

  cy.wait(800);
});

Quando('clica em diminuir texto', () => {
  cy.get('body').then(($el) => {
    alturaAntesDiminuir = $el[0].getBoundingClientRect().height;
  });

  cy.get('.pojo-a11y-btn-resize-minus').click();

  cy.wait(800);
});

Entao('o tamanho da fonte deve ser aumentado', () => {
  cy.get('body').should(($el) => {
    const alturaDepoisAumentar = $el[0].getBoundingClientRect().height;
    expect(alturaDepoisAumentar).to.be.greaterThan(alturaAntesAumentar);
  });
});

Entao('o tamanho da fonte deve ser diminuido', () => {
  cy.get('body').should(($el) => {
    const alturaDepoisDiminuir = $el[0].getBoundingClientRect().height;
    expect(alturaDepoisDiminuir).to.be.lessThan(alturaAntesDiminuir);
  });
});