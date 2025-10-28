// Atualize este array conforme adicionar novos álbuns
const albuns = [
  {
    nome: "Estádio Nilton Santos",
    primeiraFoto: "assets/nilton_santos/foto1.jpg",
    link: "nilton_santos.html"
  },
  // Exemplo de mais álbuns:
  // {
  //   nome: "Casamento Ana & João",
  //   primeiraFoto: "assets/casamento_ana_joao/foto1.jpg",
  //   link: "casamento_ana_joao.html"
  // }
];

let idx = 0;

const img = document.getElementById('carrossel-foto');
const nome = document.getElementById('album-nome');
const link = document.getElementById('album-link');

function atualizaCarrossel() {
  img.src = albuns[idx].primeiraFoto;
  img.alt = albuns[idx].nome;
  nome.textContent = albuns[idx].nome;
  link.href = albuns[idx].link;
}

document.getElementById('prev').onclick = () => {
  idx = (idx - 1 + albuns.length) % albuns.length;
  atualizaCarrossel();
};
document.getElementById('next').onclick = () => {
  idx = (idx + 1) % albuns.length;
  atualizaCarrossel();
};

window.onload = atualizaCarrossel;