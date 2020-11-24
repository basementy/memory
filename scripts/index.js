var imagens = [
  './assets/gato.png',
  './assets/macaco.png',
  './assets/porco.png',
  './assets/ovelha.png',
  './assets/rinoceronte.png',
  './assets/gato.png',
  './assets/macaco.png',
  './assets/porco.png',
  './assets/ovelha.png',
  './assets/rinoceronte.png',
  './assets/rato.png',
  './assets/rato.png',
];

var primeiro = null;
var segundo = null;
var contador = 0;
var pontuacao = 0;
var tentativas = 0;
var tempI, tempF;

function prepararJogo() {
  for (var i = 0; i < imagens.length; ++i) {
    var img = document.getElementById(`img${i}`);
    img.src = imagens[i];
  }

  iniciarJogo();
}

function iniciarJogo() {
  var data = new Date();
  tempI = data.getMinutes();

  document.getElementById('div1').style.display = 'block';
  setTimeout(cobrir, 1000);

  function cobrir() {
    for (var i = 0; i < imagens.length; ++i) {
      var img = document.getElementById(`img${i}`);
      img.src = './assets/fundo.png';
    }
  }

  document.getElementById('btn1').style.display = 'none';
}

function clicar(x, index) {
  ++tentativas;
  x.src = imagens[index];
  comparar(x);
}

function finalizarJogo() {
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

function jogarNovamente() {
  parent.window.document.location.href = '';
}

function comparar(x) {
  if (primeiro == null) {
    primeiro = x;
  } else if (segundo == null) {
    segundo = x;
  }

  if (primeiro != null && segundo != null) {
    if (primeiro.src == segundo.src && primeiro != segundo) {
      setTimeout(mostarImagemCerta, 200);

      function mostarImagemCerta() {
        primeiro.onclick = '';
        segundo.onclick = '';
        primeiro.src = './assets/branco.png';
        segundo.src = './assets/branco.png';
        primeiro = null;
        segundo = null;
        ++contador;
      }

      setTimeout(finalizarJogo, 400);
    } else {
      setTimeout(mostarImagemErrada, 400);

      function mostarImagemErrada() {
        primeiro.src = './assets/fundo.png';
        segundo.src = './assets/fundo.png';
        primeiro = null;
        segundo = null;
      }
    }
  }
}
