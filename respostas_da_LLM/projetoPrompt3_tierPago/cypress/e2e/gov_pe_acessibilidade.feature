# language: pt
Funcionalidade: Validação do Menu de Acessibilidade

  Cenário: Validar alternância de contraste e tamanho de texto durante a navegação
    Dado que eu acesso o portal do Governo de Pernambuco
    Quando eu clico em AUMENTAR TEXTO
    E eu clico em CONTRASTE NEGATIVO
    E eu clico no menu "SERVIÇOS"
    E eu clico no menu "NOTICIAS"
    Então a interface deve estar em contraste negativo e acessível ao usuário
    
    Quando eu clico no menu "GOVERNO"
    Então o tamanho da fonte deve ser aumentado
    
    Quando eu clico em DIMINUIR TEXTO
    E eu clico em CONTRASTE NEGATIVO
    E eu clico no menu "NOTICIAS"
    E eu clico no menu "SERVIÇOS"
    Então a interface deve estar com o contraste original
    
    Quando eu clico no menu "INÍCIO"
    Então o tamanho da fonte deve voltar ao tamanho base ampliado anterior