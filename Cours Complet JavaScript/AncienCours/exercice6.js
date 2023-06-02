// EXERCICE 6 : Les évènements.
const cercle = document.querySelector('.cercle');
const carre = document.querySelector('.carre');

// 1. Changez la couleur du cercle en "crimson" quand votre souris le survole.

cercle.addEventListener('mouseover', function(){
    cercle.style.background = "crimson"
})

// 2. Changez la couleur du carré en "violet" quand vous cliquez dessus.

carre.addEventListener('click', function(){
    carre.style.background = "violet"
})

// 3. Rajoutez l'évenement "click" au document, puis loggez la position(x,y) des clics que vous effectuez sur le document.

// const doc = document.querySelector('body'); pas utile

document.addEventListener('click', function(e){
    // console.log(`${e.x}, ${e.y}`);
    console.log(`${e.clientX}, ${e.clientY}`);
})
