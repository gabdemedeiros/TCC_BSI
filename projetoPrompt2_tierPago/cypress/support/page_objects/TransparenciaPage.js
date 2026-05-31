class TransparenciaPage {
    // Seletores baseados no HTML fornecido
    elements = {
        btnAcessibilidade: () => cy.get('.pojo-a11y-toolbar-toggle a'),
        btnAumentarTexto: () => cy.get('a[data-action="resize-plus"]'),
        btnDiminuirTexto: () => cy.get('a[data-action="resize-minus"]'),
        btnEscalaCinza: () => cy.get('a[data-action="grayscale"]'),
        btnContrasteNegativo: () => cy.get('a[data-action="negative-contrast"]'),
        
        // Menus de navegação
        menuItem: (texto) => cy.contains('.gm-menu-item__txt', texto),
        
        // Seletores de validação (Baseados nas classes comuns do plugin Pojo A11y)
        body: () => cy.get('body')
    }

    visitar() {
        cy.visit('https://transparencia.pe.gov.br/');
    }

    abrirMenuAcessibilidade() {
        this.elements.btnAcessibilidade().click({ force: true });
    }

    clicarMenu(nome) {
        this.elements.menuItem(nome).click({ force: true });
        cy.wait(500); // Aguarda carregamento da nova página
    }

    // Validações de Estado
    validarEscalaCinza() {
        this.elements.body().should('have.class', 'pojo-a11y-grayscale');
    }

    validarContrasteNegativo() {
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

    validarFonteAumentada() {
        this.elements.body().should('have.class', 'pojo-a11y-resize-font-130');
    }
}

export default new TransparenciaPage();
