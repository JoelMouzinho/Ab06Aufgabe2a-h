describe('My First Test Suite', () => {
    it('should load the homepage', () => {
      cy.visit('http://127.0.0.1:5500/Ab06/index.html');
      
      cy.title().should('include', 'Cypress');
    });
  
    it('should find and click a button', () => {
      cy.visit('http://127.0.0.1:5500/Ab06/index.html');
      
      cy.get('button').click();
    });
  });
  