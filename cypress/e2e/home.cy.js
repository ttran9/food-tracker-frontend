/// <reference types="cypress" />

/*
 * helper function to type into the input field.
 */
const typeInput = (inputMessage) => {
  cy.get("[data-cy='messagefield']").type(inputMessage);
  cy.get("[data-cy='updatemessagebutton']").click();
  cy.get("[data-cy='messagespan']").should("be.visible");
};

describe("Home Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("should show welcoming text", () => {
    cy.contains("Welcome to the Home component!").should("be.visible");
  });

  it("should render a message after entering data into the input and then updating the message.", () => {
    const message = "hello!";
    typeInput(message);
  });

  it("should render a message after entering data into the input, then updating the message, and clearing it.", () => {
    const message = "hello!";
    typeInput(message);
    cy.get("[data-cy='clearmessagebutton']").click();
    cy.get("[data-cy='messagespan']").should("not.be.visible");
  });
});
