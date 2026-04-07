const { Given: Dado, When: Quando, Then: Entao } = require("@badeball/cypress-cucumber-preprocessor");

//Variável pra armazenar resposta de API
let respostaAPI;

//Evita que erros da aplicação interrompam a execução dos testes
Cypress.on('uncaught:exception', () => false);

//Simula comportamento de usuário clicando no botão "TODAS AS CONSULTAS"
Quando('o usuário clica em TODAS AS CONSULTAS sobre despesas', () => {
  cy.get('[data-block-id="056e1b8"]').click();
});

//Consulta de dados dentro do iframe
Quando('o usuário clica em DESPESAS GERAIS', () => {

    //Interceptação pra capturar dados de API
    cy.intercept('**/doQuery*').as('consultaDespesas');

    //Clica no botão de "despesas gerais"
    cy.get('[data-block-id="37c1015"]').click();

  //Espera e armazena dados de API
    cy.wait('@consultaDespesas').then((interception) => {
      respostaAPI = interception.response.body;
    });

});

//Regra de negócio: Valor da despesa fixada deve ser maior que valor da despesa empenhada
Entao('o valor da despesa fixada deve ser maior que o valor da despesa empenhada', () => {

  //Verifica se a resposta da API foi armazenada 
  expect(respostaAPI).to.not.be.undefined;

  //Pega os dados da API. 'resulted' tem os valores exibidos no dashboard
  const dados = respostaAPI.resultset;

  //Converte valores para números
  function converter(valor) {
    return Number(
      String(valor)
        .replace(/[^\d,.-]/g, '') //remove textos
        .replace(',', '.') //converte vírgula para ponto (padrão numérico)
    );
  }

  //Extração dos valores de despesas fixada e empenhada
  const fixada = converter(dados[0][0]);
  const empenhada = converter(dados[1][0]);

  //Compara os valores e valida que fixada é maior que empenhada
  expect(fixada).to.be.greaterThan(empenhada);
});

//-----------------------------------RECEITAS----------------------------------------------

//Simula comportamento de usuário clicando no botão "TODAS AS CONSULTAS" em Receitas
Quando('o usuário clica em TODAS AS CONSULTAS sobre receitas', () => {
  cy.get('[data-block-id="1f9991d"]').click();
});

//Consulta de dados de receita dentro do iframe
Quando('o usuário clica em BENEFICIOS FISCAIS', () => {

  //Interceptação pra capturar dados de API
  cy.intercept('**/doQuery*').as('consultaTabelaBeneficiarios');

  //Clica no botão de "beneficios fiscais"
  cy.get('[data-block-id="ba22071"]').click();

  //Espera e armazena dados de API
  cy.wait('@consultaTabelaBeneficiarios').then((interception) => {
    respostaAPI = interception.response.body;
  });
});

//Regra de negócio: Valida que a coluna empresa da tabela não está vazia
Entao('a tabela de beneficiários deve estar com a coluna "EMPRESA" preenchida', () => {

  //Verifica se a resposta da API foi armazenada 
  expect(respostaAPI).to.not.be.undefined;

  //Pega os dados da API. 'resulted' tem os valores exibidos no dashboard
  const dadosTabela = respostaAPI.resultset;

  // percorre todas as linhas (equivalente ao .each)
  dadosTabela.forEach((linha) => {

    const coluna = linha[3]; // equivalente ao .eq(3)

    expect(coluna).to.not.be.null;
    expect(String(coluna)).to.not.be.empty;
  });

});

//-----------------------------------LICITACOES----------------------------------------------

Quando('o usuário clica em CONSULTA A FORNECEDORES', () => {

  //Interceptação pra capturar dados de API
  cy.intercept('**/doQuery*').as('consultaCredores');

  //Clica no botão de "bconsulta a fornecedores"
  cy.get('[data-block-id="f41546e"]').click();

});

Quando('o usuário acessa o gráfico de maiores credores', () => {

  //Espera a API responder
  cy.wait('@consultaCredores').then((interception) => {

    const body = interception.response.body;

    // 🔹 garante que pegamos a resposta correta
    if (body && body.resultset) {
      respostaAPI = body;
    }
  });

});

Entao('o gráfico de Maiores Credores em 2026 deve estar em ordem decrescente', () => {

  //Verifica se a resposta da API foi armazenada 
  expect(respostaAPI).to.not.be.undefined;

  //Pega os dados da API. 'resulted' tem os valores exibidos no dashboard
  const dadosGrafico = respostaAPI.resultset;

   //extrai apenas os valores (coluna de valor)
  const valores = dadosGrafico.map(item => Number(item[1]));

  //cria cópia ordenada decrescente
  const ordenado = [...valores].sort((a, b) => b - a);

  //valida se já está ordenado
  expect(valores).to.deep.equal(ordenado);

});//-----------------------------------GESTAO----------------------------------------------

