import faq from '../../config/faqs.json';
describe('FaqPage component', () => {
    beforeEach(() => {
        cy.visit('/faq');
    });

    it('should toggle speaker accordion', () => {
        cy.get('[aria-label="Speaker Section"] svg').should('have.class', 'rotate-180');
        cy.get('[data-cy=speakerSection]').should('be.visible');

        cy.get('[aria-label="Speaker Section"]').click();
        cy.get('[aria-label="Speaker Section"] svg').should('not.have.class', 'rotate-180');
        cy.get('[data-cy=speakerSection]').should('be.visible');
    });

    it('should toggle student accordion', () => {
        cy.get('[aria-label="Student Section"] svg').should('have.class', 'rotate-180');
        cy.get('[data-cy=studentSection]').should('be.visible');

        cy.get('[aria-label="Student Section"]').click();
        cy.get('[aria-label="Student Section"] svg').should('not.have.class', 'rotate-180');
        cy.get('[data-cy=studentSection]').should('be.visible');
    });

    it('should toggle sponsor accordion', () => {
        cy.get('[aria-label="Sponsor Section"] svg').should('have.class', 'rotate-180'); // Check if the icon is rotated indicating the accordion is open
        cy.get('[data-cy=sponsorSection]').should('be.visible'); // Check if the content of speaker accordion is visible

        cy.get('[aria-label="Sponsor Section"]').click(); // Click again to close the speaker accordion
        cy.get('[aria-label="Sponsor Section"] svg').should('not.have.class', 'rotate-180'); // Check if the icon is not rotated indicating the accordion is closed
        cy.get('[data-cy=sponsorSection]').should('be.visible');
    });
    it('should have all the sections opened by default', () => {
        cy.get('[data-cy=speakerqna]').should('be.visible');
        cy.get('[data-cy=studentqna]').should('be.visible');
        cy.get('[data-cy=sponsorqna]').should('be.visible');
    });
    it('should contains all questions in all sections', () => {
        cy.get('[data-cy=speakerqna] div').should('have.length', faq.speakerQuestions?.length);
        cy.get('[data-cy=studentqna] div').should('have.length', faq.studentQuestions?.length);
        cy.get('[data-cy=sponsorqna] div').should('have.length', faq.sponsorQuestions?.length);
    });

});