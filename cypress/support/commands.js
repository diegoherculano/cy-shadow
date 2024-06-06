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
    let element = cy.wrap(subject);
    for (let i = 0; i < selectors.length; i++) {
      element = element.shadow().find(selectors[i]);
    }
    return element;
  }
);
