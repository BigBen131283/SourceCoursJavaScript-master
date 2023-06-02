// EXERCICE 3 : Tableaux, Objets, évènements...


// Créez un tableau avec trois valeurs à l'intérieur : 5124, true, et un objet qui contient une propriété.

let tableau = [5124, true, {
    macron: "démission"
}]

// Créez un objet avec trois propriétés

let myObj = {
    marque: "Renault",
    modele: "Clio",
    couleur: "Blanche"
}

// Dans l'HTML, il y a un texte, rentrez cet élement dans une constante,
// puis changez la couleur de son fond au clic en violet(purple/violet);

const titre = document.querySelector('h1');

document.addEventListener('click', changeBackground);

function changeBackground(){
    titre.style.background = "purple";
}