'use strict';

//Recogemos lo que necesitamos de HTML
const mainHtml = document.querySelector('.js-main');
const titleHtml = document.querySelector('.title');
//Creamos un array vacío que recoja las teclas pulsadas por el usuario
const pressed = [];
//Creamos una variable que recoja la palabra secreta. 
const secret = 'marilyn';

//Creamos un EVENT LISTENER
window.addEventListener('keyup', (event) => {
    pressed.push(event.key);
    pressed.splice(-secret.length -1, pressed.length - secret.length)
        if(pressed.join('').toLowerCase().includes(secret.toLowerCase())){
        mainHtml.style.background = 'url(./images/marilyn.jpg)';
        mainHtml.style.backgroundSize = 'cover';
        mainHtml.style.backgroundPosition = 'center center';
        titleHtml.innerHTML = '';
    }
})



    