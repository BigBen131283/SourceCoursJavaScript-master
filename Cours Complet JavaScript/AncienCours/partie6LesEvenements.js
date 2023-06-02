const btn = document.querySelector('button')

// A éviter :
// btn.onclick = function(){
//     console.log('hello world');
// }

// btn.addEventListener('click', foo);

// function foo(){
//     console.log("Hello world");
// }

// btn.removeEventListener('click', foo);

// btn.addEventListener('mouseenter', foo);
// btn.addEventListener('mouseout', foo);
// btn.addEventListener('mouseover', foo);

// document.addEventListener('keydown', function(e){
//     console.log(e.key);
// });

// window.addEventListener('load', function(){
//     console.log("Tout a bien chargé");
// })

// const inp = document.querySelector('input');

// inp.addEventListener('input', function(e) {
//     console.log(inp.value);
// })

// Propagation des événements

// btn.addEventListener('click', function(e){
//     // e.stopPropagation();
//     console.log("Event BUTTON");
// }, true)
// le 3ème paramètre d'eventListener permet d'inverser la propagation des événements true de bas en haut, par défaut false de haut en bas
// document.body.addEventListener('click', function(){
//     console.log("Event BODY");
// }, true)

// const form = document.querySelector('form');
// const inp = document.querySelector('input')

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(inp.value);
// })