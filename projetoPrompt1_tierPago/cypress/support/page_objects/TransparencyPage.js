class TransparencyPage {
  // Seletores (Exemplos baseados na estrutura comum de portais governamentais)
  get btnAccessibility() { return cy.get('.pojo-a11y-toolbar-toggle-link'); }
  get btnIncreaseText() { return cy.get('.pojo-a11y-btn-resize-plus'); }
  get btnDecreaseText() { return cy.get('.pojo-a11y-btn-resize-minus'); }
  get btnGrayscale() { return cy.get('.pojo-a11y-btn-grayscale'); }
  get btnNegativeContrast() { return cy.get('.pojo-a11y-btn-negative-contrast'); }
  
  // Elementos do Menu Principal
  getMenuSection(sectionName) {
    return cy.contains('.gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt', sectionName);
  }

  visit() {
    cy.visit('https://transparencia.pe.gov.br/');
  }

  toggleAccessibilityMenu() {
    this.btnAccessibility.click();
  }

  checkGrayscale(active = true) {
    // Valida se a classe de filtro ou CSS de grayscale está aplicada ao body/html
    const assertion = active ? 'have.class' : 'not.have.class';
    cy.get('body').should(assertion, 'pojo-a11y-grayscale');
  }

  checkFontSize(sizeType) {
    // Valida se o atributo de data-size ou classe de fonte foi alterado@
    cy.get('body').should('have.class', 'pojo-a11y-resize-font-130', sizeType);
  }

  checkFontSizeReduced() {
  cy.get('body')
    .should('not.have.class', 'pojo-a11y-resize-font-130');
  }

  verificaContrasteNegativo() {
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

        })

        cy.contains('LICITAÇÕES E CONTRATOS').should('be.visible');

        cy.contains('LICITAÇÕES E ATAS DE REGISTRO DE PREÇO').should('be.visible');

        cy.contains('CONTRATOS').should('be.visible');

        cy.contains('FORNECEDORES').should('be.visible');
    }

}

export default new TransparencyPage();