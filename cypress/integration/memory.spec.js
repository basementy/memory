context('Game Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('should start the game', () => {
    cy.get('#btn1').click();
    cy.get('h1').should('have.text', 'Jogo da memória');
    cy.get('div').should('have.id', 'div1');
    cy.get('img').should('have.class', 'img-memoria');
  });

  it('should list all cards', () => {
    cy.get('#btn1').click();
    cy.wait(1000);
    cy.get('img').should('have.length', 12);
  });

  it('should show the image after click', () => {
    cy.get('#btn1').click();

    cy.wait(1000);

    cy.get('#img0').should('have.attr', 'src', './assets/card_background.png');
    cy.get('#img0')
      .click()
      .should('have.attr', 'src', './assets/card_animal_cat.png');
  });

  it('should reset the cards after the error', () => {
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

  it('should remove the cards after the match', () => {
    cy.get('#btn1').click();

    cy.wait(1000);

    cy.get('#img0')
      .should('have.attr', 'src', './assets/card_background.png')
      .click()
      .should('have.attr', 'src', './assets/card_animal_cat.png');

    cy.get('#img5')
      .should('have.attr', 'src', './assets/card_background.png')
      .click()
      .should('have.attr', 'src', './assets/card_animal_cat.png');

    cy.get('#img0').should(
      'have.attr',
      'src',
      './assets/card_background_blank.png'
    );

    cy.get('#img5').should(
      'have.attr',
      'src',
      './assets/card_background_blank.png'
    );
  });

  it('should match all the cards', () => {
    cy.get('#btn1').click();

    cy.wait(1000);

    cy.get('#img0').click();
    cy.get('#img5').click().wait(500);
    cy.get('#img1').click();
    cy.get('#img6').click().wait(500);
    cy.get('#img2').click();
    cy.get('#img7').click().wait(500);
    cy.get('#img3').click();
    cy.get('#img8').click().wait(500);
    cy.get('#img4').click();
    cy.get('#img9').click().wait(500);
    cy.get('#img4').click();
    cy.get('#img9').click().wait(500);
    cy.get('#img10').click();
    cy.get('#img11').click();

    cy.get('img').should(
      'have.attr',
      'src',
      './assets/card_background_blank.png'
    );
  });

  it('should see the final score', () => {
    cy.get('#btn1').click();

    cy.wait(1000);

    cy.get('#img0').click();
    cy.get('#img5').click().wait(500);
    cy.get('#img1').click();
    cy.get('#img6').click().wait(500);
    cy.get('#img2').click();
    cy.get('#img7').click().wait(500);
    cy.get('#img3').click();
    cy.get('#img8').click().wait(500);
    cy.get('#img4').click();
    cy.get('#img9').click().wait(500);
    cy.get('#img4').click();
    cy.get('#img9').click().wait(500);
    cy.get('#img10').click();
    cy.get('#img11').click();

    cy.get('img').should(
      'have.attr',
      'src',
      './assets/card_background_blank.png'
    );

    cy.get('#div3').should('contain', 'parabéns você conseguiu: 32 pontos!!!');
  });

  it('should allow to play again', () => {
    cy.get('#btn1').click();

    cy.wait(1000);

    cy.get('#img0').click();
    cy.get('#img5').click().wait(500);
    cy.get('#img1').click();
    cy.get('#img6').click().wait(500);
    cy.get('#img2').click();
    cy.get('#img7').click().wait(500);
    cy.get('#img3').click();
    cy.get('#img8').click().wait(500);
    cy.get('#img4').click();
    cy.get('#img9').click().wait(500);
    cy.get('#img4').click();
    cy.get('#img9').click().wait(500);
    cy.get('#img10').click();
    cy.get('#img11').click();

    cy.get('img').should(
      'have.attr',
      'src',
      './assets/card_background_blank.png'
    );

    cy.wait(1000);

    cy.get('#div4>input').should('have.attr', 'value', 'Jogar novamente?');
  });

  it('should show the name of the creator', () => {
    cy.get('footer').should('contain', 'DevKiwm');
  });
});
