import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TransparencyPage from "../page_objects/TransparencyPage";

Given("que o usuário acessa o portal de transparência", () => {
  TransparencyPage.visit();
});

When("acessa o menu de acessibilidade", () => {
  TransparencyPage.toggleAccessibilityMenu();
});

When("clica em {string}", (option) => {
  if (option === "AUMENTAR TEXTO") TransparencyPage.btnIncreaseText.click();
  if (option === "DIMINUIR TEXTO") TransparencyPage.btnDecreaseText.click();
  if (option === "ESCALA DE CINZA") TransparencyPage.btnGrayscale.click();
  if (option === "CONTRASTE NEGATIVO") TransparencyPage.btnNegativeContrast.click();
});

When("navega pelas seções {string}, {string} e {string}", (s1, s2, s3) => {
  [s1, s2, s3].forEach(section => {
    TransparencyPage.getMenuSection(section).click();
    cy.wait(500); // Aguarda transição visual se necessário
  });
});

When("navega pelas seções {string}, {string}, {string} e {string} restantes", (s1, s2, s3, s4) => {
  [s1, s2, s3, s4].forEach(section => {
    TransparencyPage.getMenuSection(section).click();
    cy.wait(500); // Aguarda transição visual se necessário
  });
});

Then("valida que a interface deve estar em escala de cinza e acessível", () => {
  TransparencyPage.checkGrayscale(true);
});

Then("valida que o tamanho da fonte deve estar aumentado", () => {
  TransparencyPage.checkFontSize('large');
});

Then("valida que a interface deve estar em contraste negativo e acessível", () => {
  TransparencyPage.verificaContrasteNegativo();
});

Then("valida que o tamanho da fonte deve estar diminuído", () => {
  TransparencyPage.checkFontSizeReduced('small');
});
