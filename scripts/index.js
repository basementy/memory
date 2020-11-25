var cardImages = [
  './assets/card_animal_cat.png',
  './assets/card_animal_monkey.png',
  './assets/card_animal_pig.png',
  './assets/card_animal_sheep.png',
  './assets/card_animal_rhino.png',
  './assets/card_animal_cat.png',
  './assets/card_animal_monkey.png',
  './assets/card_animal_pig.png',
  './assets/card_animal_sheep.png',
  './assets/card_animal_rhino.png',
  './assets/card_animal_rat.png',
  './assets/card_animal_rat.png',
];

var primeiro = null;
var segundo = null;
var contador = 0;
var pontuacao = 0;
var tentativas = 0;
var tempI, tempF;

function setupGame() {
  for (var i = 0; i < cardImages.length; ++i) {
    var img = document.getElementById(`img${i}`);
    img.src = cardImages[i];
  }

  startGame();
}

function startGame() {
  var data = new Date();
  tempI = data.getMinutes();
  document.getElementById('div1').style.display = 'block';

  setTimeout(cobrir, 1000);

  function cobrir() {
    for (var i = 0; i < cardImages.length; ++i) {
      var img = document.getElementById(`img${i}`);
      img.src = './assets/card_background.png';
    }
  }

  document.getElementById('btn1').style.display = 'none';
}

function onClickCard(x, index) {
  ++tentativas;
  x.src = cardImages[index];
  compareCards(x);
}

function finishGame() {
  if (contador > 5) {
    var data = new Date();
    tempF = Number(data.getMinutes());

    if (tempF > tempI) {
      tempF = tempF - tempI;
    } else {
      tempF = -tempI + 60 + tempF;
    }

    pontuacao = parseInt(10000 / (tentativas + tempF * 5));

    var div = document.querySelector('div#div3');
    div.innerText = `parabéns você conseguiu: ${pontuacao} pontos!!!`;
    div.style.display = 'block';

    var div = document.querySelector('div#div4');
    div.style.display = 'block';
  }
}

function restartGame() {
  parent.window.document.location.href = '';
}

function compareCards(x) {
  if (primeiro == null) {
    primeiro = x;
  } else if (segundo == null) {
    segundo = x;
  }

  if (primeiro != null && segundo != null) {
    if (primeiro.src == segundo.src && primeiro != segundo) {
      setTimeout(() => {
        primeiro.onclick = '';
        segundo.onclick = '';
        primeiro.src = './assets/card_background_blank.png';
        segundo.src = './assets/card_background_blank.png';
        primeiro = null;
        segundo = null;
        ++contador;
      }, 200);

      setTimeout(finishGame, 400);
    } else {
      setTimeout(() => {
        primeiro.src = './assets/card_background.png';
        segundo.src = './assets/card_background.png';
        primeiro = null;
        segundo = null;
      }, 400);
    }
  }
}
