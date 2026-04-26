# language: pt

Funcionalidade: Validação do menu de acessibilidade no Portal da Transparência PE

  Cenário: Validação do menu de acessibilidade no Portal da Transparência PE
    Dado que o usuário acessa o portal de transparência
    Quando ele abre o menu de acessibilidade
    E clica em AUMENTAR TEXTO
    E clica em ESCALA DE CINZA
    Quando o usuário clica em DESPESAS
    E o usuário clica em RECEITAS
    E o usuário clica em RECURSOS HUMANOS
    Então a interface deve estar em escala de cinza e acessível ao usuário
    E o usuário clica em LICITACOES E CONTRATOS
    E o usuário clica em RESPONSABILIDADE FISCAL
    E o usuário clica em GESTAO ESTADUAL
    E o usuário clica em PARTICIPACAO CIDADA
    Então o tamanho da fonte deve ser aumentado
    Quando ele abre o menu de acessibilidade
    E clica em DIMINUIR TEXTO
    E clica em CONTRASTE NEGATIVO
    Quando o usuário clica em GESTAO ESTADUAL
    E o usuário clica em RESPONSABILIDADE FISCAL
    E o usuário clica em LICITACOES E CONTRATOS
    Então a interface deve estar em contraste negativo e acessível ao usuário
    E o usuário clica em RECURSOS HUMANOS
    E o usuário clica em RECEITAS
    E o usuário clica em DESPESAS
    Então o tamanho da fonte deve ser diminuido