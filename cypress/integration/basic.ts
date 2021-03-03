
it.skip('google test', function(){
    cy.visit('https://google.com')
    cy.get('[name="q"]')
        .type('Automation step by step')
        .type('{enter}')
})

it.only('learning assertions', function(){
  
    cy.visit('https://example.cypress.io/commands/querying')
    // cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')
    cy.get('#query-btn').should('contain', 'Button')
    cy.get('#query-btn').should('have.id', 'query-btn')
    cy.get('[data-test-id="test-example"]')
  .invoke('attr', 'data-test-id')
  .should('equal', 'test-example')

  cy.get('[data-test-id="test-example"]')
  .invoke('css', 'position')
  .should('equal', 'static')

  cy.get('[data-test-id="test-example"]')
  .should('have.attr', 'data-test-id', 'test-example')
  .and('have.css', 'position', 'static')
})