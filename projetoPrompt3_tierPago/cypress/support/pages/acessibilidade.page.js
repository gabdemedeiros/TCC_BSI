class AcessibilidadePage {
  // Seletores fornecidos na especificação
  get btnAumentarTexto() { return cy.get('button[aria-label="Aumentar fonte A+"]'); }
  get btnDiminuirTexto() { return cy.get('button[aria-label="Diminuir fonte A-"]'); }
  get btnContraste() { return cy.get('button[aria-label="Alternar contraste"]'); }
  
  // Seletores do menu de navegação
  get menuServicos() { return cy.get('a.css-883erp[href="/app/catalog/carta-de-servicos"]'); }
  get menuNoticias() { return cy.get('a.css-883erp[href="/app/catalog/noticias"]'); }
  get menuGoverno() { return cy.get('a.css-883erp[href="/app/catalog/secretarias-e-orgaos"]'); }
  get menuInicio() { return cy.get('a.css-883erp[href="/app/catalog/"]'); }

  // Elemento base para validação de estilos globais (Geralmente aplicados no body ou html)
  get body() { return cy.get('body'); }

  visitarPortal() {
    cy.visit('https://www.pe.gov.br/');
    // Aguarda o body carregar para garantir estabilidade
    this.body.should('be.visible');
  }

  clicarMenu(opcao) {
    const menus = {
      'SERVIÇOS': this.menuServicos,
      'NOTICIAS': this.menuNoticias,
      'GOVERNO': this.menuGoverno,
      'INÍCIO': this.menuInicio
    };
    
    if (menus[opcao]) {
      menus[opcao].click();
    } else {
      throw new Error(`Opção de menu "${opcao}" não cadastrada no Page Object.`);
    }
  }

  guardarTamanhoFonteAtual() {
    // Captura o font-size atual do body para comparar posteriormente
    return cy.get('p').first().then(($el) => {
        return parseFloat(
            window.getComputedStyle($el[0]).fontSize
        );  
    });
  }
}

export default new AcessibilidadePage();