/* 
    1. L'erreur classique de référence.

    L'erreur classique est d'utiliser l'opérateur "=" pour copier une valeur de référence.
    Voyons un exemple avec un tableau;

*/

const numbers = [1,2,3];
const numbersCopy = numbers;

console.log(numbersCopy);

numbers.push(4);
console.log(numbersCopy); // valeur de référence



/* 
    2. Alors comment copier ?

    Il existe plusieurs manière de faire, avec le spread operator [...], {...}, Object.assign(), Array.from(), .concat()

    Néanmoins, toutes ces façons de faire vont créer une copie superficielle, c'est à dire que seulement les valeurs primitives seront copiées, les tableaux ou objets imbriqués seront toujours référencés.

    Vous sentez le bug arriver ?
*/

const letters = ["a","b","c", {name: "Zorro"}];

const lettersCopy = [...letters]; // spread operator
lettersCopy[3] = {...letters[3]}
console.log(lettersCopy);

letters.push("d");
console.log(letters);
console.log(lettersCopy);

letters[0] = 999;
letters[3].name = "Max";
console.log(letters);
console.log(lettersCopy); // valeur de référence

const shallowClone = structuredClone(letters);
letters[3].name = "Tom";
console.log(shallowClone);

/* 
    3. Faire une copie profonde, deep copy.


    A. On peut faire une copie profonde en copiant chaque niveau d'un objet "à la main".

    B. Seconde manière de faire, utiliser la méthode structuredClone() qui permet de deep-clone facilement.
    Malheuresement, cette méthode ne permet pas de cloner des méthodes.
*/

const deepObj = {
    // userName: "Benj",
    // age: 40,
    collection: {
        a: 1,
        b: 2,
        c: 3
    }
} // objet profond parce qu'il y a des imbrications

// const objCopy = {
//     ...deepObj
// }
// deepObj.userName = "Benjamin"; // valeur de référence, valeurs indépendantes
// deepObj.collection.a = 4; // valeur primitive, valeurs dépendantes
// console.log((objCopy)); 

const objCopy = {
    collection: {
        ...deepObj.collection
    }
}
deepObj.collection.a = 4;
console.log(deepObj);
console.log(objCopy);