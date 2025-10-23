/*
 * BLOCCO 05b: Funcionalidade JavaScript
 * Objetivo: Fazer o carrossel (slideshow) da página inicial rodar automaticamente.
 */

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // Oculta todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Avança para o próximo slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    // Exibe o slide atual
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
    
    // Chama a função novamente após 5 segundos (5000 milissegundos)
    setTimeout(showSlides, 5000); 
}

/* * NOTA DE IMPLEMENTAÇÃO: 
 * Este script faz o carrossel funcionar em loop infinito, trocando de slide a cada 5 segundos.
 * Certifique-se de que a tag <script> abaixo seja adicionada no final do body do index.html.
 */