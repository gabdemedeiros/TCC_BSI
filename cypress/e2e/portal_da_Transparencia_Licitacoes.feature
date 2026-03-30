# language: pt

Funcionalidade: Contraste negativo, aumento de texto, reiniciar menu acessibilidade e consulta sobre licitações

  Cenário: Contraste, aumento de texto, consulta de licitações no Portal de Transparencia e reiniciar acessibilidade
    Dado que o usuário acessa o portal de transparência
    Quando ele abre o menu de acessibilidade
    E clica em CONTRASTE NEGATIVO
    Entao a interface deve estar em contraste negativo
    Quando clica em AUMENTAR TEXTO
    Então o tamanho da fonte deve ser aumentado
    E clica em REINICIAR
    # Então a interface deve voltar ao estado inicial