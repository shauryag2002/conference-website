const socials = [
    {
        name: "Github",
        href: "https://github.com/asyncapi",
        imgUrl: "/img/Github.png",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/asyncapi/",
        imgUrl: "/img/Linkedln.png",
    },
    {
        name: "Tweeter(X)",
        href: "https://twitter.com/asyncapispec",
        imgUrl: "/img/twitter_new.png",
    },
];
describe('Footer', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the social media icons', () => {
        let ind = 0;
        cy.get('[data-cy=socials]')
            .find('img')
            .should('have.length', 6)
            .each(($socialIcon, index) => {
                console.log($socialIcon)
                if (index % 2 == 1) {
                    console.log(ind, socials[ind])
                    cy.wrap($socialIcon)
                        .should('have.attr', 'alt')
                        .and('equals', socials[ind]?.name);
                    cy.wrap($socialIcon)
                        .should('have.attr', 'src')
                        .and('equals', socials[ind]?.imgUrl);
                    ind++;
                }
            });
    });

    it('should display the logo', () => {
        cy.get('[data-cy=footer]')
            .find('img[src="/img/logo.png"]')
            .should('have.attr', 'src')
            .and('include', '/img/logo.png');
    });

    it('should have a link to the Code of Conduct', () => {
        cy.get('[data-cy=footer]')
            .find('a')
            .contains('Code of Conduct')
            .should('have.attr', 'href')
            .and('include', 'https://github.com/asyncapi/.github/blob/master/CODE_OF_CONDUCT.md');
    });
});