// cypress 는 기본적으로 xpath 를 지원하지 않기 때문에 3rd Party 라이브러리인
// cypress-xpath 를 사용합니다.
require('cypress-xpath')

// config/dev.json 에 설정한 환경를 가져오는 코드입니다.
const CYPRESS_ENV = Cypress.env

// js 기반의 jest 와 같이 describe 를 이용하여 테스트 케이스를 구성합니다.
describe('구글에서 marimba.team 검색', () => {
    // before 부분에 테스트 코드 시작 할 때 항상 동작하는 코드를 구성합니다.
    // ex) 로그인과 같은 전처리 코드
    before("구글 검색 페이지 접", () => {
        cy.intercept('/*').as('googleSearch')
        cy.visit(CYPRESS_ENV('BASE_URL'));
        cy.wait('@googleSearch').then((interception) => {
            assert.isNotNull(interception.response.body, 'Google Search Page Loading')
        })
     });

    // 테스트를 실행하는 코드를 작성합니다.
    it('marimba.team 검색', () => {
        //구글 검색창에 marimba.team 을 입력합니다.
        // 참고) 구글 검색 창 => //input[@name="q"]
        cy.xpath('//input[@name="q"]').type('marimba.team')
        //Google 검색 버튼을 클릭합니다.
        // 참고) XPATH, 텍스트로 화면의 Element 를 찾을 수 있습니다.
        cy.contains('Google 검색').click({force: true});
        //Google 로 marimba.team 을 검색한 결과를 확인합니다.
        // 참고) cypress 는 should 를 이용하여 Assertion 을 수행합니다. ex) .should('exist');
        cy.contains('Now use emojis to show your support to your team. Never get lost with. Real-time Cursor and ... Teaming. Productivity. Never miss a beat. Try Marimba for FREE.').should('exist');
    });

});
