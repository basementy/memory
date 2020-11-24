/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost/qualidade/modelo.html')
  })

  it('Start Game', () => {
    cy.get('#btn1')
      .click()

    cy.get('h1')
      .should('have.text','Jogo da memória')

    cy.get('div')
      .should('have.id', 'div1')

    cy.get('img')
      .should('have.class', 'img-memoria')
  })


  it('List 12 cards', () => {
    cy.get('#btn1')
      .click()

    cy.wait(1000);

    cy.get('#img0')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img1')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img2')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img3')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img4')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img5')
     .should('have.attr', 'src', 'fundo.png')

    cy.get('#img6')
     .should('have.attr', 'src', 'fundo.png')

    cy.get('#img7')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img8')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img9')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img10')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img11')
      .should('have.attr', 'src', 'fundo.png')
      

  })

  it('Show image after click', () => {
    cy.get('#btn1')
      .click()

    cy.wait(1000);

    cy.get('#img0')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img0')
    .click()
    .should('have.attr', 'src', 'gato.png')
  })

  it('Should reset after error', () => {
    cy.get('#btn1')
      .click()

    cy.wait(1000);

    cy.get('#img0')
      .should('have.attr', 'src', 'fundo.png')
      .click()
      .should('have.attr', 'src', 'gato.png')

    cy.get('#img1')
      .should('have.attr', 'src', 'fundo.png')
      .click()
      .should('have.attr', 'src', 'macaco.png')
    
    cy.get('#img0')
      .should('have.attr', 'src', 'fundo.png')

    cy.get('#img1')
    .should('have.attr', 'src', 'fundo.png')
  })
})
