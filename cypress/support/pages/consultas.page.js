class ConsultasPage {

    clicaDespesas() {
        cy.get('#menu-item-4548 > .gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt').click()
    }

    clicaReceitas() {
        cy.get('#menu-item-4617 > .gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt').click()
    }

    clicaRecursosHumanos() {
        cy.get('#menu-item-4621 > .gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt').click()
    }

    clicaLicitacoesContratos() {
        cy.get('#menu-item-4672 > .gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt').click()
    }

    clicaResponsabilidadeFiscal() {
        cy.get('#menu-item-4550 > .gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt').click()
    }

    clicaGestaoEstadual() {
        cy.get('#menu-item-4551 > .gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt').click()
    }

    clicaParticipacaoCidada() {
        cy.get('#menu-item-3199 > .gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt').click()
    }
}

export default new ConsultasPage();