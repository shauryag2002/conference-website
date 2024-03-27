import cities from '../../config/city-lists.json';
describe('TicketCards component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('renders correctly', () => {
        cy.get('[data-cy=ticketCard]').should('exist');
    });

    it('displays city name and country', () => {

        cy.get('[data-cy=ticketCard]')
            .each(($ticketCard, index) => {
                cy.wrap($ticketCard).contains(cities[index].name).should('be.visible');
                cy.wrap($ticketCard).contains(cities[index].country).should('be.visible');
                cy.wrap($ticketCard).contains(cities[index].date).should('be.visible');
            })
    });
    it('disables buy button', () => {
        cy.get('[data-cy=ticketCard] Button')
            .each(($button) => {
                cy.wrap($button).should('be.disabled');
            })
    });
});