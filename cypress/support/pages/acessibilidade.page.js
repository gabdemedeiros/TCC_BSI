class AcessibilidadePage {

    //-------------------------------------ACESSIBILIDADE-------------------------------------//
    
    acessaMenuAcessibilidade() {
        cy.get('.pojo-a11y-toolbar-toggle-link').click();
    }

    //TAMANHO DE TEXTO

    clicaAumentarTexto() {
        //Verifica e guarda a altura do body com referência
        cy.get('body').then(($el) => {
            //A altura é usada como indicador de aumento de texto
            //Pega o elemento DOM real, retorna o tamanho e posição da altura na tela
            this.alturaAntesAumentar = $el[0].getBoundingClientRect().height; 
        });
    
        //Clica no botão de "aumentar texto"
        cy.get('.pojo-a11y-btn-resize-plus').click();
    }

    verificaAumentoTexto(){

        cy.get('body').should(($el) => {
            //Pega o elemento DOM real, depois de aumentar texto
            const alturaDepoisAumentar = $el[0].getBoundingClientRect().height;
            //Compara com o elemento antes do aumento e valida que é maior que o anterior
            expect(alturaDepoisAumentar).to.be.greaterThan(this.alturaAntesAumentar);
        });
    }

    clicaDiminuirTexto() {
        //Verifica e guarda a altura do body com referência
        cy.get('body').then(($el) => {
            //A altura é usada como indicador de diminuição de texto
            //Pega o elemento DOM real, retorna o tamanho e posição da altura na tela
            this.alturaAntesDiminuir = $el[0].getBoundingClientRect().height;
        });
    
        //Clica no botão de "diminuir texto"
        cy.get('.pojo-a11y-btn-resize-minus').click();
    }

    verificaDiminuicaoTexto() {
        cy.get('body').should(($el) => {
            //Pega o elemento DOM real, depois de diminuir texto
            const alturaDepoisDiminuir = $el[0].getBoundingClientRect().height;
            //Compara com o elemento antes da diminuição e valida que é menor que o anterior
            expect(alturaDepoisDiminuir).to.be.lessThan(this.alturaAntesDiminuir);
        });
    }

    //ESCALA DE CINZA

    clicaEscalaDeCinza() {
    //Clica no botão de "aumentar texto"
        cy.get('.pojo-a11y-btn-grayscale').click();
    }

    verificaEscalaDeCinza() {
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

        cy.contains('REMUNERAÇÕES').should('be.visible');

        cy.contains('PAINEL DE CADASTRO DOS SERVIDORES').should('be.visible');

        cy.contains('PADRÃO REMUNERATÓRIO DOS CARGOS E FUNÇÕES CARGOS COMISSIONADOS').should('be.visible');
        
        cy.contains('PLANO DE CARGOS E CARREIRAS').should('be.visible');

        cy.contains('PAINEL DE DIÁRIAS').should('be.visible');

        cy.contains('MAPA DE DIÁRIAS').should('be.visible');

        cy.contains('SERVIDORES EXPULSOS').should('be.visible');
        
        cy.contains('PORTAL DO SERVIDOR').should('be.visible');

        cy.contains('ESTAGIÁRIOS').should('be.visible');

        cy.contains('CONCURSOS').should('be.visible');
    }

    //CONTRASTE NEGATIVO

    clicaContrasteNegativo() {
        //Clica no botão de "contraste negativo"
        cy.get('.pojo-a11y-btn-negative-contrast').click();
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

export default new AcessibilidadePage();