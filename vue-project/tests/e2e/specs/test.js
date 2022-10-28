// https://docs.cypress.io/api/table-of-contents

describe("App Component", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
  });
  it('New Task', () => {
    cy.get('input[type="text"]').click();
    cy.get('input[type="text"]').type('Task 1{enter}').should('have.value', 'Task 1');
    cy.get('input[type="text"]').type('Task 2{enter}').should('have.value', 'Task 2');
  });
  it('Delete Task', () => {
    cy.get('[data-cy="delete"]')
    cy.get('[data-cy="delete"]').click();

    // cy.get('input[type="text"]').type('Task 1{enter}').should('have.value', 'Task 1');
  });
});
