describe('Navbar', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should display the logo', () => {
        cy.get('[data-cy=logo-image]').should('have.attr', 'alt', 'conference logo');
    });
    it('should toggle the dropdown menu on tablet', () => {
        cy.viewport('ipad-2');
        cy.get('[data-cy=hamburger]').click();
        cy.get('[data-cy=dropDown]').should('be.visible');
        cy.get('[data-cy=hamburger]').click();
        cy.get('[data-cy=dropDown]').should('not.exist');
    });

    it('should show submenus on desktop', () => {
        cy.viewport('macbook-15');
        cy.get('[data-cy=hamburger]').should('not.exist');
    });
    it('should navigate to about section', () => {
        cy.viewport('macbook-15');
        cy.contains('About').click();
        cy.url().should('include', '/#about');
    })
    it('should navigate to speakers section', () => {
        cy.viewport('macbook-15');
        cy.contains('Speakers').click();
        cy.url().should('include', '/#speakers');
    })
    it('should navigate to sponsors section', () => {
        cy.viewport('macbook-15');
        cy.contains('Sponsors').click();
        cy.url().should('include', '/#sponsors');
    })
    it('should navigate to Helsinki venue page', () => {
        cy.viewport('macbook-15');
        cy.contains('Venue').click();
        cy.contains('Helsinki').click();
        cy.url().should('include', '/venue/Helsinki');
    })
    it('should navigate to London venue page', () => {
        cy.viewport('macbook-15');
        cy.contains('Venue').click();
        cy.contains('London').click();
        cy.url().should('include', '/venue/London');
    })
    it('should navigate to Paris venue page', () => {
        cy.viewport('macbook-15');
        cy.contains('Venue').click();
        cy.contains('Paris').click();
        cy.url().should('include', '/venue/Paris');
    })
});