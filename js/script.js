// ===============================
// Carrossel de Álbuns - Atualizado
// ===============================

// Array de álbuns
const albuns = [
  {
    nome: "Estádio Nilton Santos",
    primeiraFoto: "../imagens/nilton_santos/foto1.jpg",
    link: "../albuns/nilton_santos.html"
  },
  {
    nome: "Maria Clara",
    primeiraFoto: "../imagens/maria_clara/maria_clara1.jpg",
    link: "../albuns/maria_clara.html"
  },
  {
    nome: "Poly Gomes",
    primeiraFoto: "../imagens/poly_gomes/poly_gomes1.jpg",
    link: "../albuns/poly_gomes.html"
  },
  {
    nome: "Rayssa (Parte 1)",
    primeiraFoto: "../imagens/rayssa_debutante_p1/rayssa_debutante_p1_foto1.jpg",
    link: "../albuns/rayssa_debutante_p1.html"
  },
  {
    nome: "Rayssa (Parte 2)",
    primeiraFoto: "../imagens/rayssa_debutante_p2/rayssa_debutante_p2_foto1.jpg",
    link: "../albuns/rayssa_debutante_p2.html"
  },
  {
    nome: "Rute (70 Anos)",
    primeiraFoto: "../imagens/rute_70/aniversario_rute_foto1.jpg",
    link: "../albuns/rute_70.html"
  },
  {
    nome: "Bodas de Ouro – Sergio e Preta",
    primeiraFoto: "../imagens/bodas_sergio_preta/bodas_sergio_preta1.jpg",
    link: "../albuns/bodas_sergio_preta.html"
  }
];

// Índice atual do carrossel
let idx = 0;

// Elementos do DOM
const img = document.getElementById('carrossel-foto');
const nome = document.getElementById('album-nome');
const link = document.getElementById('album-link');

// Função para atualizar carrossel
function atualizaCarrossel() {
  img.src = albuns[idx].primeiraFoto;
  img.alt = albuns[idx].nome;
  nome.textContent = albuns[idx].nome;
  link.href = albuns[idx].link;
}

// Navegação manual
document.getElementById('prev').onclick = () => {
  idx = (idx - 1 + albuns.length) % albuns.length;
  atualizaCarrossel();
  reiniciaIntervalo();
};

document.getElementById('next').onclick = () => {
  idx = (idx + 1) % albuns.length;
  atualizaCarrossel();
  reiniciaIntervalo();
};

// ===============================
// Avanço automático
// ===============================
let intervalo = setInterval(() => {
  idx = (idx + 1) % albuns.length;
  atualizaCarrossel();
}, 5000); // muda de álbum a cada 5 segundos

// Reinicia o temporizador quando o usuário clica manualmente
function reiniciaIntervalo() {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    idx = (idx + 1) % albuns.length;
    atualizaCarrossel();
  }, 5000);
}

// Inicializa carrossel na carga da página
window.onload = atualizaCarrossel;
