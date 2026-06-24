# language: pt
Funcionalidade: Validação do Menu de Acessibilidade
  Como um usuário que necessita de recursos de acessibilidade
  Eu quero ajustar as configurações visuais do Portal de Transparência
  Para navegar nas seções de Despesas, Receitas e Gestão com conforto visual

  Contexto:
    Dado que o usuário acessa o portal de transparência

  Cenário: Validar filtros visuais e redimensionamento de texto
    E acessa o menu de acessibilidade
    Quando clica em "AUMENTAR TEXTO"
    E clica em "ESCALA DE CINZA"
    E navega pelas seções "Despesas", "Receitas" e "Recursos Humanos"
    Então valida que a interface deve estar em escala de cinza e acessível
    Quando navega pelas seções "Licitações e Contratos", "Responsabilidade Fiscal", "Gestão Estadual" e "Participação Cidadã" restantes   
    Então valida que o tamanho da fonte deve estar aumentado
    Quando acessa o menu de acessibilidade
    E clica em "DIMINUIR TEXTO"
    E clica em "CONTRASTE NEGATIVO"
    E navega pelas seções "Gestão Estadual", "Responsabilidade Fiscal" e "Licitações e Contratos"
    Então valida que a interface deve estar em contraste negativo e acessível
    Quando navega pelas seções "Recursos Humanos", "Receitas" e "Despesas"
    Então valida que o tamanho da fonte deve estar diminuído
