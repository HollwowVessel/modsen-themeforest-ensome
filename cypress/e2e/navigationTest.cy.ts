describe('template spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
    cy.viewport(1920, 1080);
  });
  it('passes', () => {
    cy.get('li[data-test-id="0"]').click();
    cy.url().should('include', '/');
    cy.get('li[data-test-id="1"]').click();
    cy.url().should('include', '/solutions');
    cy.get('li[data-test-id="2"]').trigger('mouseover');

    cy.get('li[data-test-id="3"]').click();
    cy.url().should('include', '/elements');
    cy.get('li[data-test-id="4"]').click();
    cy.url().should('include', '/blog');
    cy.get('li[data-test-id="5"]').click();
    cy.url().should('include', '/contacts');
  });
});
