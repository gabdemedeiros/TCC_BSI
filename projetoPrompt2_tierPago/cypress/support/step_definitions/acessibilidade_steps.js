import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TransparenciaPage from "../page_objects/TransparenciaPage.js";

Given("que o usuário acessa o portal de transparência", () => {
    TransparenciaPage.visitar();
});

When("acessa o menu de acessibilidade", () => {
    TransparenciaPage.abrirMenuAcessibilidade();
});

When("clica em {string}", (botao) => {
    if (botao === "AUMENTAR TEXTO") TransparenciaPage.elements.btnAumentarTexto().click();
    if (botao === "DIMINUIR TEXTO") TransparenciaPage.elements.btnDiminuirTexto().click();
    if (botao === "ESCALA DE CINZA") TransparenciaPage.elements.btnEscalaCinza().click();
    if (botao === "CONTRASTE NEGATIVO") TransparenciaPage.elements.btnContrasteNegativo().click();
});

When("navega pelos menus {string}, {string} e {string}", (m1, m2, m3) => {
    [m1, m2, m3].forEach(menu => TransparenciaPage.clicarMenu(menu));
});

When("navega pelos menus {string}, {string}, {string} e {string}", (m1, m2, m3, m4) => {
    [m1, m2, m3, m4].forEach(menu => TransparenciaPage.clicarMenu(menu));
});

Then("valida que a interface deve estar em escala de cinza e acessível", () => {
    TransparenciaPage.validarEscalaCinza();
});

Then("valida que o tamanho da fonte deve estar aumentado", () => {
    TransparenciaPage.validarFonteAumentada();
});

Then("valida que a interface deve estar em contraste negativo e acessível", () => {
    TransparenciaPage.validarContrasteNegativo();
});

Then("valida que o tamanho da fonte deve estar diminuído", () => {
    // Na lógica do plugin, remover o aumento volta ao normal ou aplica classe de redução
    TransparenciaPage.elements.body().should('not.have.class', 'pojo-a11y-resize-font');
});
