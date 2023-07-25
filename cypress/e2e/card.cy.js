describe('Card Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Card component displays correct props and behavior', () => {
    // Загружаем данные из фикстуры
    cy.fixture('cards.json').then((cards) => {
      // Проверяем, что количество карточек совпадает с количеством карточек в фикстуре
      cy.get('.group').should('have.length', cards.length);

      // Для каждой карты...
      cards.forEach((card) => {
        // ...проверяем, что элементы находятся на странице с корректными данными
        cy.get(`a[href="${card.link}"]`).within(() => {
          cy.get('img')
            .should('have.attr', 'src', card.imgSrc)
            .should('have.attr', 'alt', card.title);

          cy.get('h2').contains(card.title);
          cy.get('p').contains(card.description);
        });
      });

      // Проверяем, что при нажатии на карточку открывается корректная страница
      cy.get(`a[href="${cards[0].link}"]`).click();
      cy.location('pathname').should('eq', cards[0].link);
    });
  });
});
