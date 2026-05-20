# language: pt

Funcionalidade: Escala de cinza e consulta sobre receitas

    Cenário: Mudança da escala de cor e consulta de receitas no Portal de Transparencia
        Dado que o usuário acessa o portal de transparência
        Quando ele abre o menu de acessibilidade
        E clica em ESCALA DE CINZA
        Então a interface deve estar em escala de cinza
        Quando o usuário clica em TODAS AS CONSULTAS sobre receitas
        E o usuário clica em BENEFICIOS FISCAIS
        Então a tabela de beneficiários deve estar com a coluna "EMPRESA" preenchida
        
        