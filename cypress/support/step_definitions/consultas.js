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