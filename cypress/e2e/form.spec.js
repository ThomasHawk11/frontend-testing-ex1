import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// cypress/e2e/form.spec.js
describe('Form E2E Test', () => {
    it('should display error messages for invalid inputs', () => {
      // Visitez la page du formulaire
      cy.visit('http://localhost:3000'); // Remplacez par l'URL de votre application
  
      // Cliquez sur le bouton de soumission sans remplir les champs
      cy.get('button[type="submit"]').click();
  
      // Vérifiez que les messages d'erreur sont affichés
      cy.contains('Name is required').should('be.visible');
      cy.contains('Email is required').should('be.visible');
      cy.contains('Password is required').should('be.visible');
    });
  
    it('should submit the form with valid inputs', () => {
      // Visitez la page du formulaire
      cy.visit('http://localhost:3000'); // Remplacez par l'URL de votre application
  
      // Remplissez les champs du formulaire
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('input[name="password"]').type('password123');
  
      // Cliquez sur le bouton de soumission
      cy.get('button[type="submit"]').click();
  
      // Vérifiez que les messages d'erreur ne sont pas affichés
      cy.contains('Name is required').should('not.exist');
      cy.contains('Email is required').should('not.exist');
      cy.contains('Password is required').should('not.exist');
    });
  });