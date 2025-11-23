// Lista completa de álbuns com primeira foto e link
const albuns = [
  { nome: "Estádio Nilton Santos", primeiraFoto: "imagens/albuns/nilton_santos/nilton_santos1.jpg", link: "albuns/nilton_santos.html" },
  { nome: "Artes Florais", primeiraFoto: "imagens/albuns/arte_floral/arranjo_1.jpg", link: "albuns/arte_floral.html" },
  { nome: "Céus & Concretos", primeiraFoto: "imagens/albuns/ceus_concretos/ceu_e_concreto1.jpg", link: "albuns/ceus_concretos.html" },
  { nome: "Compositor Noca da Portela", primeiraFoto: "imagens/albuns/noca_portela/noca_da_portela1.jpg", link: "albuns/noca_portela.html" },
  { nome: "Engenho Dois Olhares", primeiraFoto: "imagens/albuns/engenho_dois_olhares/engenho_de_dentro1.jpg", link: "albuns/engenho_dois_olhares.html" },
  { nome: "Engenho Vivo", primeiraFoto: "imagens/albuns/engenho_vivo/engenho_vivo1.jpg", link: "albuns/engenho_vivo.html" },
  { nome: "Geometria do Cotidiano", primeiraFoto: "imagens/albuns/geometria_cotidiano/geometria_cotidiana1.jpg", link: "albuns/geometria_cotidiano.html" },
  { nome: "Manhã de Luz na Guanabara", primeiraFoto: "imagens/albuns/manha_luz_guanabara/luz_guanabara1.jpg", link: "albuns/manha_luz_guanabara.html" },
  // Grupo de aniversários
  { nome: "Maria Clara", primeiraFoto: "imagens/albuns/maria_clara/maria_clara1.jpg", link: "albuns/maria_clara.html" },
  { nome: "Poly Gomes", primeiraFoto: "imagens/albuns/poly_gomes/poly_gomes1.jpg", link: "albuns/poly_gomes.html" },
  { nome: "Rayssa (Parte 1)", primeiraFoto: "imagens/albuns/rayssa_debutante_p1/rayssa_debutante_p1_foto1.jpg", link: "albuns/rayssa_debutante_p1.html" },
  { nome: "Rayssa (Parte 2)", primeiraFoto: "imagens/albuns/rayssa_debutante_p2/rayssa_debutante_p2_foto1.jpg", link: "albuns/rayssa_debutante_p2.html" },
  { nome: "Rute (70 anos)", primeiraFoto: "imagens/albuns/rute_70/aniversario_rute_foto1.jpg", link: "albuns/rute_70.html" },
  { nome: "Bodas de Ouro (Sergio & Preta)", primeiraFoto: "imagens/albuns/bodas_ouro/bodas_ouro1.jpg", link: "albuns/bodas_ouro.html" }
];

let idx = 0;

// Elementos do DOM
const img = document.getElementById('carrossel-foto');
const nome = document.getElementById('album-nome');
const link = document.querySelector('.carrossel-slide a') || null;

function atualizaCarrossel() {
  img.src = albuns[idx].primeiraFoto;
  img.alt = albuns[idx].nome;
  nome.textContent = albuns[idx].nome;
}

// Navegação manual
document.getElementById('prev').onclick = () => {
  idx = (idx - 1 + albuns.length) % albuns.length;
  atualizaCarrossel();
};

document.getElementById('next').onclick = () => {
  idx = (idx + 1) % albuns.length;
  atualizaCarrossel();
};

// Carrossel automático
setInterval(() => {
  idx = (idx + 1) % albuns.length;
  atualizaCarrossel();
}, 5000); // troca a cada 5 segundos

// Inicializa
window.onload = () => {
  atualizaCarrossel();
  preenchePortifolio();
};

// Preenche portfólio
function preenchePortifolio() {
  const albumList = document.getElementById('album-list');
  albuns.forEach(album => {
    const a = document.createElement('a');
    a.href = album.link;
    a.className = 'album-card';
    a.innerHTML = `<img src="${album.primeiraFoto}" alt="${album.nome}"><span>${album.nome}</span>`;
    albumList.appendChild(a);
  });
}
