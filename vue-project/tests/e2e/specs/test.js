describe("App Component", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
  });
  it('New Task', () => {
    cy.get('input[type="text"]').click();
    cy.get('input[type="text"]').type('Task 1{enter}').should('have.value', '');
    cy.get('[data-cy="task__title"]').should('have.text', 'Task 1');
  });
  it('Delete Task', () => {
    cy.get('[data-cy="delete"]').click();
    cy.get('[data-cy="notasks"]').should('have.text', ' The task list is empty!  Add a new task! ');
  });
  it('Task Status Toggle', () => {
    cy.get('input[type="text"]').type('Task 1{enter}');
    cy.get('input[type="checkbox"]').should('not.have.checked');
    cy.get('input[type="checkbox"]').click({ force: true });
    cy.get('input[type="checkbox"]').should('have.checked');
  });
  it('Tab Buttons Toggle', () => {
    cy.get('input[type="text"]').type('Task 2{enter}');
    cy.get('[data-cy="tab__title"]').contains('All').click();
    cy.get('[data-cy="task__title"]').contains('Task 1').should('be.visible');
    cy.get('[data-cy="task__title"]').contains('Task 2').should('be.visible');
    cy.get('[data-cy="tab__title"]').contains('Active').click();
    cy.get('[data-cy="task__title"]').contains('Task 1').should('not.exist');
    cy.get('[data-cy="task__title"]').contains('Task 2').should('be.visible');
    cy.get('[data-cy="tab__title"]').contains('Completed').click();
    cy.get('[data-cy="task__title"]').contains('Task 1').should('be.visible');
    cy.get('[data-cy="task__title"]').contains('Task 2').should('not.exist');
  });
  it('Number of Tasks in Footer', () => {
    cy.get('footer p').should('have.text', ' 1/2 left ');
    cy.get('input[type="text"]').type('Task 3{enter}');
    cy.get('footer p').should('have.text', ' 2/3 left ');
    cy.get('input[type="checkbox"]').click({ force: true });
    cy.get('[data-cy="tab__title"]').contains('All').click();
    cy.get('footer p').should('have.text', ' 3/3 left ');
  });
});
