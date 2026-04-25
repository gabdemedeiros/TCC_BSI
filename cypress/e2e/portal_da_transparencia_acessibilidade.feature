# language: pt

Funcionalidade: Aumento, diminuição de texto e consulta sobre despesas

  Cenário: Aumento e diminuicao de tamanho da letra e consulta de despesas no Portal de Transparencia
    Dado que o usuário acessa o portal de transparência
    Quando ele abre o menu de acessibilidade
    E clica em AUMENTAR TEXTO
    Quando o usuário clica em DESPESAS
    Então o tamanho da fonte deve ser aumentado
    Quando ele abre o menu de acessibilidade
    E clica em DIMINUIR TEXTO
    E o usuário clica em RECEITAS
    Então o tamanho da fonte deve ser diminuido
    Quando ele abre o menu de acessibilidade
    E clica em ESCALA DE CINZA
    Quando o usuário clica em RECURSOS HUMANOS
    Então a interface deve estar em escala de cinza e acessível ao usuário
    Quando ele abre o menu de acessibilidade
    E clica em CONTRASTE NEGATIVO
    Quando o usuário clica em LICITACOES E CONTRATOS
    #Entao a interface deve estar em contraste negativo e acessível ao usuário
    Quando o usuário clica em RESPONSABILIDADE FISCAL
    Quando ele abre o menu de acessibilidade
    E clica em REINICIAR
    Então a interface deve voltar ao estado inicial
