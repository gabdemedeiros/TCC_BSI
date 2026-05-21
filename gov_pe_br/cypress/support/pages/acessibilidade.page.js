class AcessibilidadePage {
    
    //TAMANHO DE TEXTO

    clicaAumentarTexto() {
        //Verifica e guarda a fonte como referência
        cy.get('p').first().then(($el) => {
            //A fonte é usada como indicador de aumento de texto
            this.fonteAntesAumentar = parseFloat(
                window.getComputedStyle($el[0]).fontSize
            );
        });
    
        //Clica no botão de "aumentar texto"
        Cypress._.times(1, () => {
            cy.get('[aria-label="Aumentar fonte A+"]').click();
        });
    }

    verificaAumentoTexto(){

        cy.get('p').first().should(($el) => {
            //Pega o elemento DOM real, depois de aumentar texto
            const fonteDepoisAumentar = parseFloat(window.getComputedStyle($el[0]).fontSize);
            //Compara com o elemento antes do aumento e valida que é maior que o anterior
             expect(fonteDepoisAumentar).to.be.greaterThan(this.fonteAntesAumentar);
        });
    }

    clicaDiminuirTexto() {
       //Verifica e guarda a fonte como referência
        cy.get('p').first().then(($el) => {
            //A fonte é usada como indicador de diminuição de texto
            this.fonteAntesDiminuir = parseFloat(window.getComputedStyle($el[0]).fontSize);
        });
    
        //Clica no botão de "aumentar texto"
        Cypress._.times(1, () => {
            cy.get('[aria-label="Diminuir fonte A-"]').click();
        });
    }

    verificaDiminuicaoTexto() {
        cy.get('p').first().should(($el) => {
            //Pega o elemento DOM real, depois de aumentar texto
            const fonteDepoisDiminuir = parseFloat(window.getComputedStyle($el[0]).fontSize);
            //Compara com o elemento antes do aumento e valida que é maior que o anterior
             expect(fonteDepoisDiminuir).to.be.lessThan(this.fonteAntesDiminuir);
        });
    }

    //CONTRASTE NEGATIVO

    clicaContrasteNegativo() {

        cy.get('html').then(($html) => {

            const styles =
                window.getComputedStyle($html[0]);

            this.backgroundAntes =
                styles.getPropertyValue('--color-background-primary');
        });

        //Clica no botão de "contraste negativo"
        cy.get('[aria-label="Alternar contraste"]').click();

    }

    verificaContrasteNegativo() {
        //Valida que o contraste ficou negativo
        cy.get('html').should(($html) => {

            const styles =
                window.getComputedStyle($html[0]);

            const backgroundDepois =
                styles.getPropertyValue('--color-background-primary');

            expect(backgroundDepois.trim())
                .to.not.equal(this.backgroundAntes.trim());
        });
    }

    verificaContrasteOriginal() {
        //Valida que o contraste ficou negativo
        cy.get('html').should(($html) => {

            const styles =
                window.getComputedStyle($html[0]);

            const backgroundDepois =
                styles.getPropertyValue('--color-background-primary');

            expect(backgroundDepois.trim())
                .to.not.equal(this.backgroundAntes.trim());
        });
    }

}

export default new AcessibilidadePage();
