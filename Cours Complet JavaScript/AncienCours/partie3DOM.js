let tableau = [1,2,3,4,5];
            // 0,1,2,3,4

tableau.push(6);

console.log(tableau.length);

let pays = {
    nom: "Japon",
    pop : 100000000,
    classement: 3,
    PIB: 377915,
    myArr: [1,2,3,4,5,6,7],
    myObj: {
        propa: "abc"
    },
    maMethode: function(){
        console.log("Hello depuis la méthode");
    }
};

console.log(pays.nom);
pays.maMethode();
console.log(pays.myArr[2]);

const titre = document.querySelector('h1');

// titre.style.background = "blue";

// console.log(typeof titre, titre.innerText);

titre.addEventListener('click', functionAnimation);
titre.addEventListener('mouseenter', functionAnimation);

function functionAnimation(){
    console.log("Hello quand on clique");
}