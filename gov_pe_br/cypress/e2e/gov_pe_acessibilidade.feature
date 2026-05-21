# language: pt

Funcionalidade: Validação do menu de acessibilidade no Portal da Transparência PE

  Cenário: Validação do menu de acessibilidade no Gov PE
    Dado que o usuário acessa o portal do Governo de Pernambuco
    E clica em AUMENTAR TEXTO
    E clica em CONTRASTE NEGATIVO
    Quando o usuário clica em SERVIÇOS
    E o usuário clica em NOTICIAS
    Então a interface deve estar em contraste negativo e acessível ao usuário
    E o usuário clica em GOVERNO
    Então o tamanho da fonte deve ser aumentado
    E clica em DIMINUIR TEXTO
    E clica em CONTRASTE NEGATIVO
    E o usuário clica em NOTICIAS
    Quando o usuário clica em SERVIÇOS
    Então a interface deve estar com o contraste original
    E o usuário clica em INÍCIO
    Então o tamanho da fonte deve ser aumentado