# language: pt

Funcionalidade: Acessibilidade no Portal de Transparência

  Cenário: Aumento e diminuicao de tamanho da letra e consulta de despesas no Portal de Transparencia
    Dado que o usuário acessa o portal de transparência
    Quando ele abre o menu de acessibilidade
    E clica em aumentar texto
    Então o tamanho da fonte deve ser aumentado
    E clica em diminuir texto
    Então o tamanho da fonte deve ser diminuido
    Quando o usuário clica em todas as consultas sobre despesas
    E o usuário clica em Despesas Gerais
    Dado que o usuário acessa as despesas gerais do portal de transparência