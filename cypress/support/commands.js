// Comando personalizado para encontrar elementos sombreados
Cypress.Commands.add(
  "findShadowElement",
  { prevSubject: "element" },
  (subject, selector) => {
    const element = cy.wrap(subject);
    return element.shadow().find(selector);
  }
);

Cypress.Commands.add(
  "findShadowElementWithLoop",
  { prevSubject: "element" },
  (subject, selectors) => {
    for (let i = 0; i < selectors.length; i++) {
      const element = cy.wrap(subject);

      element.findShadowElement(selectors[i]);
    }
  }
);
