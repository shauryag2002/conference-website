describe('Speaker Registration', () => {
    beforeEach(() => {
        cy.visit('/apply-for-speaker'); // Assuming '/speaker-registration' is the route for the Speaker Registration page
    });
    it('should display the speaker registration form', () => {

        cy.get('#forms').should('exist');
    });
    it('should have all the fields', () => {
        cy.get('#forms').find('input').should('have.length', 3);
    });
    it('should pass all steps', () => {
        cy.get('#forms').find('input').each(($input, index) => {
            if (index == 0) {
                cy.wrap($input).type('John Doe');
            } else if (index == 1) {
                cy.wrap($input).type('john@gmail.com');
            }
            else {
                cy.wrap($input).type('http://localhost:3000');
            }
        })
        cy.get('#forms').find('textarea').type('I am a software engineer');
        cy.get('#forms').find('button').click();
        cy.contains('Step 2/4').should('exist');
        cy.get('#forms').find('input').each(($input, index) => {
            if (index == 0) {
                cy.wrap($input).type('How to write tests');
            }
        })
        cy.get('#forms').find('textarea').type('This is a test description');
        cy.get('#forms').find('button').click();
        cy.contains('Step 3/4').should('exist');
        cy.get('#forms').find('input').each(($select, index) => {
            if (index == 0) {
                cy.wrap($select).click();
                cy.contains('Lightning talk(5mins)').click()
                // cy.wrap($select).type('Lightning talk(5mins)');
            }
            else {
                cy.wrap($select).click();
                cy.contains('Introductory and overview').click()
                // cy.wrap($select).type('Introductory and overview');
            }
        })
        cy.get('#forms').find('button').click();
        cy.contains('Step 4/4').should('exist');
        cy.get('#forms').find('textarea').type('This is a test Additional Info');
        cy.get('#forms').find('button').click();

        cy.contains('Your talk have been submitted successfully').should('exist', { timeout: 2000 });
    });
});