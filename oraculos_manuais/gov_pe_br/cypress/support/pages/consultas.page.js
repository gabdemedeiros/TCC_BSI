class ConsultasPage {

    acessaPortal() {
        cy.visit('https://www.pe.gov.br/');
    }

    clicaServicos() {
        cy.get('a.css-883erp[href="/app/catalog/carta-de-servicos"]').click()
    }

    clicaNoticias() {
        cy.get('a.css-883erp[href="/app/catalog/noticias"]').click()
    }

    clicaGoverno() {
        cy.get('a.css-883erp[href="/app/catalog/secretarias-e-orgaos"]').click()
    }

    clicaInicio() {
        cy.get('a.css-883erp[href="/app/catalog/"]').click()
    }
}

export default new ConsultasPage();