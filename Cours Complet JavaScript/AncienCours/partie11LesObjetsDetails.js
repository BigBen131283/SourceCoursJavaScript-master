// valeurs primitives : string number boolean undefined null
// valeur de reference : objets et tableaux

let a = "abc";
let b = a;

a = 'zzz';

console.log(a, b);

let obj1 = {str: "abc"};
let obj2 = obj1;

obj1.str = "zzz"

console.log(obj1, obj2);

let arr1 = [1,2,3];
let arr2 = arr1;

arr1.push(4500);

console.log(arr2);

// BIND

const voiture = {
    couleur: 'noire',
    marque: 'peugeot',
    annee: 2007,
    myFunction: function() {
        console.log(this.annee);
    }
}

// voiture.myFunction();
// let fff = voiture.myFunction();

// let nvFunction = fff.bind(voiture);

// console.log(nvFunction);
// nvFunction();
const btn = document.querySelector('button');

btn.addEventListener('click', voiture.myFunction.bind(voiture))