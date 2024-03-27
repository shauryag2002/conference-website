describe('Header Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the conference heading', () => {
        cy.get('[data-cy=heading]').should('contain', 'AsyncAPI Conf On Tour 2024');
    });

    it('should display the conference description', () => {
        cy.get('[data-cy=headPara]').should('contain', 'Join us for the AsyncAPI Conference on Tour');
    });

    it('should navigate to the registration section when "Register now" button is clicked', () => {
        cy.get('[data-cy=register]').click();
        cy.url().should('include', '#register');
    });

    it('should display the venue slider', () => {
        cy.get('[data-cy=slider]').should('exist');
    });
});