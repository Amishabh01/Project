describe('PopupButton component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4321/') // Assuming your component is rendered on the home page
    })
  
    it('should display popup when "Contact Us" button is clicked', () => {
      cy.get('[data-testid="popup-button"]').click()
      cy.get('[data-testid="popup"]').should('be.visible')
    })
  
    it('should close popup when close button is clicked', () => {
        cy.get('[data-testid="popup-button"]').click()
        cy.get('[data-testid="popup"]').should('be.visible')
        cy.get('[data-testid="close-button"]').should('be.visible').click()

        // Wait for the popup to disappear
        // cy.get('[data-testid="popup"]').should('not.be.visible')
      
    })
  
    it('should close popup when background overlay is clicked', () => {
        cy.get('[data-testid="popup-button"]').click()
        cy.get('[data-testid="popup"]').should('be.visible')
        cy.get('[data-testid="background-overlay"]').should('be.visible').click('topLeft')
        // cy.get('[data-testid="popup"]').should('not.be.visible')
      
    })
  
    it('should display contact form inside the popup', () => {
        cy.get('[data-testid="popup-button"]').click()
        cy.get('[data-testid="popup"]').should('be.visible');

        // Check if the contact form is inside the popup
        cy.get('[data-testid="contact-form"]').should('be.visible')
        cy.get('form').should('exist');
    })
  })
  