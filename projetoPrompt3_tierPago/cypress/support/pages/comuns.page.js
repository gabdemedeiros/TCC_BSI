class ComunsPage {
    
    acessaPortal() {
        cy.visit('https://www.pe.gov.br/');
    }
}

export default new ComunsPage();