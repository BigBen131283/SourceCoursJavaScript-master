// Hoisting
// Function scoped block scoped
// Redéclaration
// Objet global

// var i = 5;
// var i = 99;

// const z = 7;

// function foo(){
//     let w = 8;
//     if(true){
//         var x = 5;
//         if(true){
//             let y = 6
//         }
//     }
//     console.log(w);
//     console.log(x);
//     console.log(z);
//     console.log(i);
//     console.log(y);
// }

// foo()
// const x = 5;
// let x = 5

// Les fonctions fléchées

// Fonction classique = hoisting
// console.log(bar());
// function bar(){
//     return 1;
// }


// Il n'y a pas le hoisting avec les fonctions fléchées, je ne peux pas l'appeler avant de l'avoir déclarée
// On les rentre dans des variables
// const foo = () => {
//     return 3;
// }
// console.log(foo());

// // Le return est induit
// const abc = () => 5;
// console.log(abc());

// const def = a => a;
// console.log(def(7));

// const myObj = {
//     a: 5,
//     funcClassique: function(){
//         console.log(this.a);
//     },
//     funcFleche: () => {
//         console.log(this);
//     }
// }

// myObj.funcClassique();
// Ne fonctionne pas ci-dessous
// On dit que la fonction ne se lie pas à son contexte appelant. Elle se lie à son contexte englobant
// myObj.funcFleche();

// Les fonctions fléchées sont plus pratiques à utilisées quand on utilise des méthodes qui prennent en paramètres d'autres fonctions

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {

// })

// let str = `Hello world ${3}`;
// console.log(str);


// Les classes
// class Pays {
//     constructor(pop, nom, pib){
//         this.pop = pop;
//         this.nom = nom;
//         this.pib = pib;
//     }

//     showPop(){
//         console.log(this.pop);
//     }
// }

// const France = new Pays(70, 'France', 2000);
// const Autralie = new Pays(35, 'Australie', 1200);

// console.log(France,Autralie);

// France.showPop()

// Spread et destructuring
// const nb = [1,2,3,4,5,6,7,8,9];

// spread operator "..."
// console.log(...nb);

// const pays = {
//     nom: 'Norvège',
//     pop: 9
// }

// Destructuring
// const {nom, pop} = pays;

// console.log(nom, pop);

// const tab = ['a', 'b'];
// const [x, y] = tab;
// console.log(x,y);

// let prenom = "John";
// let age = 48;

// const myObj = {
//     // prenom: prenom,
//     prenom,
//     // age: age
//     age
// }

// console.log(myObj.prenom, myObj.age);

//  y = 25 paramètre par défaut
// function fiz(x, y=25){
//     return x + y
// }

// console.log(fiz(20));

// "..." transforme tous les arguments (variables) que l'on reçoit quand on appelle la fonction baz dans un tableau
// function baz(...args){
//     console.log(args);
// }

// baz(1,2,3,4,5,6,7,8,9)

// Les promesses

// const promise1 = new Promise((resolve, reject) => {

//     // console.log("hello world");
//     resolve('Les données sont là!');
//     reject('Il y a une erreur')

// })
// .then((valeur) => {
//     console.log(valeur);
// })
// .catch((e) => {
//     console.log(e);
//     //  "e" c'est ce qui est défini dans reject
// })