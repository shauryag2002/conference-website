describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the page title', () => {
        cy.get('title').should('have.text', 'AsyncAPI Conference');
    });

    it('should display the background illustration', () => {
        cy.get('.color-effect').should('exist');
    });

    it('should display the about section', () => {
        cy.get('#about').should('exist');
    });

    it('should display the register section', () => {
        cy.get('#register').should('exist');
    });

    it('should display the tickets heading', () => {
        cy.contains('Tickets').should('exist');
    });

    it('should display the tickets sale message', () => {
        cy.contains('Tickets Sale [Coming Soon]').should('exist');
    });

    it('should display the tickets description', () => {
        cy.contains('Experience the Future of Asynchronous Communication').should('exist');
    });

    it('should display the ticket cards', () => {
        cy.get('[data-cy=tickets]')
            .find('button')
            .should('have.length', 3);
    });

    it('should display the sponsors section', () => {
        cy.get('#sponsors').should('exist');
    });
});