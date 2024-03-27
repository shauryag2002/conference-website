describe('About Page', () => {
    it('should display the about section correctly', () => {
        cy.visit('/');
        cy.get('[data-cy=about]')
            .should('be.visible')
            .within(() => {
                cy.get('[data-cy=aboutContent]')
                    .should('have.css', 'background-image')
                    .and('include', '/img/about.jpeg');
                cy.contains('About The Event').should('be.visible');
                cy.contains("AACoT'24").should('be.visible');
                cy.contains('The AsyncAPI Conf on Tour is an official event created by the AsyncAPI Initiative.').should('be.visible');
                cy.contains('We are currently looking for sponsors, for more details please read our Sponsorship Prospectus.').should('be.visible');
                cy.contains('Become a sponsor now').should('be.visible');
                cy.contains('Sponsorship prospectus').should('be.visible');
            });
    });
    it('Downloads the sponsorship prospectus', () => {
        cy.visit('/');
        cy.get('button').contains('Sponsorship prospectus').click({ force: true });
        cy.get('a').should('have.attr', 'href');
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('button').contains('Sponsorship prospectus').click({ force: true });
        cy.get('@windowOpen').should('be.calledWith', 'https://drive.google.com/file/d/15rQ7cp-LLmxSCcAb2aBFitgJkGhYXBrd/view', '_blank');
    });
});