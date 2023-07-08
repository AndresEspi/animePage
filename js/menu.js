/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
// eslint-disable-next-line linebreak-style
/* eslint-disable linebreak-style */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable linebreak-style */

// Obtener elementos del DOM
var button = document.querySelector('.button');
var overlay = document.querySelector('.overlay');
var menuContainer = document.querySelector('.menu-container');
var closeButtons = document.querySelectorAll('.close-button');

// Función para mostrar el menú
function openMenu() {
  overlay.style.display = 'block';
  menuContainer.style.display = 'block';
}

// Función para ocultar el menú
function closeMenu() {
  overlay.style.display = 'none';
  menuContainer.style.display = 'none';
}

// Agregar eventos a los botones
button.addEventListener('click', openMenu);
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', closeMenu);
}
