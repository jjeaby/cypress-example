require('cypress-xpath')

const CYPRESS_ENV = Cypress.env

describe('구글 검색', () => {
    before("Marimba Page Connect", () => {
        cy.intercept('/*').as('googleSearch')
        cy.visit(CYPRESS_ENV('BASE_URL'));
        cy.wait('@googleSearch').then((interception) => {
            cy.xpath('//div/div/input').type('marimba.team')
            cy.xpath('//center/input[]').click()
        })
     });


    it('Marimba Login', () => {
         // cy.contains("")
    });

});
