context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('Start Game', () => {
    cy.get('#btn1').click();
    cy.get('h1').should('have.text', 'Jogo da memória');
    cy.get('div').should('have.id', 'div1');
    cy.get('img').should('have.class', 'img-memoria');
  });

  it('List 12 cards', () => {
    cy.get('#btn1').click();
    cy.wait(1000);
    cy.get('img').should('have.length', 12);
  });

  it('Show image after click', () => {
    cy.get('#btn1').click();

    cy.wait(1000);

    cy.get('#img0').should('have.attr', 'src', './assets/card_background.png');
    cy.get('#img0')
      .click()
      .should('have.attr', 'src', './assets/card_animal_cat.png');
  });

  it('Should reset after error', () => {
    cy.get('#btn1').click();

    cy.wait(1000);

    cy.get('#img0')
      .should('have.attr', 'src', './assets/card_background.png')
      .click()
      .should('have.attr', 'src', './assets/card_animal_cat.png');

    cy.get('#img1')
      .should('have.attr', 'src', './assets/card_background.png')
      .click()
      .should('have.attr', 'src', './assets/card_animal_monkey.png');

    cy.get('#img0').should('have.attr', 'src', './assets/card_background.png');
    cy.get('#img1').should('have.attr', 'src', './assets/card_background.png');
  });
});
