# language: pt

Funcionalidade: Validação do menu de acessibilidade no Portal da Transparência PE

  Cenário: Validação do menu de acessibilidade no Gov PE
    Dado que o usuário acessa o portal do Governo de Pernambuco
    E clica em AUMENTAR TEXTO
    E clica em CONTRASTE NEGATIVO
    # Quando o usuário clica em SERVIÇOS
    # E o usuário clica em NOTÍCIAS
    Então a interface deve estar em contraste negativo e acessível ao usuário
    # E o usuário clica em GOVERNO
    # Então o tamanho da fonte deve ser aumentado
    # E o usuário clica em LICITACOES E CONTRATOS
    # E o usuário clica em RESPONSABILIDADE FISCAL
    # E o usuário clica em GESTAO ESTADUAL
    # E o usuário clica em PARTICIPACAO CIDADA
    # Quando ele abre o menu de acessibilidade
    # E clica em DIMINUIR TEXTO
    # Quando o usuário clica em GESTAO ESTADUAL
    # E o usuário clica em RESPONSABILIDADE FISCAL
    # E o usuário clica em LICITACOES E CONTRATOS
    #
    # E o usuário clica em RECURSOS HUMANOS
    # E o usuário clica em RECEITAS
    # E o usuário clica em DESPESAS
    # Então o tamanho da fonte deve ser diminuido