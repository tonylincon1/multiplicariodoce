document.addEventListener('DOMContentLoaded', function () {
var mapaImg = document.getElementById('mapaImg');
mapaImg.src = 'images/mapa-0.png'; 
mapaImg.classList.add('default');

var cidades = document.querySelectorAll('#cidades li');

cidades.forEach(function (cidade) {
    cidade.addEventListener('mouseover', function () {
            var img = cidade.getAttribute('data-img');
            if (img) {
            mapaImg.onload = function () {
                this.classList.add('loaded');
                this.classList.remove('default');  // Remove a classe 'default' quando outra imagem é carregada
            }
            mapaImg.src = 'images/' + img + '.png';
            mapaImg.classList.remove('loaded');
            }
    });
});
});