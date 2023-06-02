const premierTitre = document.getElementsByClassName('premier-titre');
const secondTitre = document.getElementById('premier-id');
const titreNu = document.querySelector('h3');
const allItems = document.querySelectorAll('.item-list');
const list = document.querySelector('ul');
const i2 = document.querySelector('.i2');
const title = document.querySelector('.premier-titre');
const parent = document.querySelector('.parent');

console.log(premierTitre);
console.log(secondTitre);
console.log(titreNu);
console.log(allItems);
console.log(list.children);
console.log(list.childNodes);
console.log(list.parentNode);
console.log(list.parentElement); // à privilégier vs parentNode

console.log(i2.nextSibling); // montre le prochain noeud
console.log(i2.nextElementSibling); // montre le prochain élément
console.log(i2.previousElementSibling); // montre le précédent élément

console.log(list.firstElementChild);
console.log(list.lastElementChild);


console.log(title);
// title.style.background = '#45dea5' // le style défini en js est prioritaire sur le style défini en css

title.innerText = 'Hello world depuis le JS!'

parent.innerHTML = '<h1>En texte depuis le JS!</h1>'

let newElement = document.createElement('li');
newElement.innerText = "Nouvel item depuis le JS!"
// list.appendChild(newElement);

let newTitle = document.createElement('h4');
newTitle.innerText = "Nouveau titre depuis le JS !"
document.body.appendChild(newTitle)

list.children[2].remove();

list.children[1].replaceWith(newElement)