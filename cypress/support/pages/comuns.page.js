class ComunsPage {
    
    acessaPortal() {
        cy.visit('https://transparencia.pe.gov.br/');
    }
}

export default new ComunsPage();