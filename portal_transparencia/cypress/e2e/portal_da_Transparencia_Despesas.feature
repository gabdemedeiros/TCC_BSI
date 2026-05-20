# language: pt

Funcionalidade: Aumento, diminuição de texto e consulta sobre despesas

  Cenário: Aumento e diminuicao de tamanho da letra e consulta de despesas no Portal de Transparencia
    Dado que o usuário acessa o portal de transparência
    Quando ele abre o menu de acessibilidade
    E clica em AUMENTAR TEXTO
    Então o tamanho da fonte deve ser aumentado
    E clica em DIMINUIR TEXTO
    Então o tamanho da fonte deve ser diminuido
    Quando o usuário clica em TODAS AS CONSULTAS sobre despesas
    E o usuário clica em DESPESAS GERAIS
    Então o valor da despesa fixada deve ser maior que o valor da despesa empenhada