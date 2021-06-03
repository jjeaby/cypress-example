require('cypress-xpath')

const CYPRESS_ENV = Cypress.env

describe('구글에서 marimba.team 검색', () => {
    before("구글 검색 페이지 접", () => {
        cy.intercept('/*').as('googleSearch')
        cy.visit(CYPRESS_ENV('BASE_URL'));
        cy.wait('@googleSearch').then((interception) => {
            assert.isNotNull(interception.response.body, 'Google Search Page Loading')
        })
     });


    it('marimba.team 검색', () => {
        cy.xpath('//input[@name="q"]').type('marimba.team')
        cy.contains('Google 검색').click({force: true});
        cy.contains('Now use emojis to show your support to your team. Never get lost with. Real-time Cursor and ... Teaming. Productivity. Never miss a beat. Try Marimba for FREE.').should('exist');
    });

});
