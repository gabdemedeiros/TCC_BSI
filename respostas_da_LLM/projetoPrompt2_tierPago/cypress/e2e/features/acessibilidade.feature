# language: pt
Funcionalidade: Acessibilidade no Portal da Transparência de Pernambuco

  Cenário: Validar persistência de filtros de acessibilidade durante a navegação
    Dado que o usuário acessa o portal de transparência
    Quando acessa o menu de acessibilidade
    E clica em "AUMENTAR TEXTO"
    E clica em "ESCALA DE CINZA"
    E navega pelos menus "Despesas", "Receitas" e "Recursos Humanos"
    Então valida que a interface deve estar em escala de cinza e acessível
    Quando navega pelos menus "Licitações e Contratos", "Responsabilidade Fiscal", "Gestão Estadual" e "Participação Cidadã"
    Então valida que o tamanho da fonte deve estar aumentado
    Quando acessa o menu de acessibilidade
    E clica em "DIMINUIR TEXTO"
    E clica em "CONTRASTE NEGATIVO"
    E navega pelos menus "Gestão Estadual", "Responsabilidade Fiscal" e "Licitações e Contratos"
    Então valida que a interface deve estar em contraste negativo e acessível
    Quando navega pelos menus "Recursos Humanos", "Receitas" e "Despesas"
    Então valida que o tamanho da fonte deve estar diminuído
