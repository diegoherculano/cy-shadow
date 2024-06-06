/// <reference types="cypress" />

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("../../src/index.html");
  });

  it("passes", () => {
    cy.get("#start")
      .shadow()
      .find("#level1")
      .shadow()
      .find("#level2")
      .shadow()
      .find("#level3")
      .shadow()
      .find("#level4")
      .find("button")
      .click();
  });

  it("alternative way", () => {
    cy.get("#start")
      .findShadowElement("#level1")
      .findShadowElement("#level2")
      .findShadowElement("#level3")
      .findShadowElement("#level4")
      .find("button")
      .click();
  });

  it("alternative way 2", () => {
    cy.get("#start")
      .findShadowElementWithLoop(["#level1", "#level2", "#level3", "#level4"])
      .find("button")
      .click();
  });

  afterEach(() => {
    cy.get("#hi").should("contain", "Hello");
  });
});
