/* 
    1. Déclarer un objet "car" et inventez trois propriétés - valeurs de votre choix.
    Ex: name, price, doors, kilometers, maxSpeed, year, etc ...
*/
 const car = {
    brand: "Renault",
    model: "Clio",
    color: "Blanche",
    power: 110,
    doors: 5
 }

/* 
    2. Vous disposez d'un tableau de fruits ci-dessous.
    A - Loggez le deuxième fruit dans la console.
    B - Loggez le dernier fruit dans la console.
    C - Retournez la longueur du tableau.
*/

const fruits = ["🍇","🍓","🍌"]

console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

/* 
    3. Loggez l'objet global BOM.
*/

console.dir(window); // faux mais ça existe et je ne sais pas à quoi sert dir
console.log(window);
