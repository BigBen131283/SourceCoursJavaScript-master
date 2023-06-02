/* 
    Une variable est le nom d'un emplacement dans la mémoire de votre ordinateur permettant de stocker des valeurs et de les utiliser dans le code. 
*/


/* let */

let mainCharacter;
// let mainCharacter = "Thomas"; //camelCase
mainCharacter = "Victor"; // on réassigne une valeur à mainCharacter
console.log(mainCharacter);


/* ⚠️Impossible d'utiliser let et const avant de les déclarer */

// console.log(secondCharacter);
// let secondCharacter = "Marie";

/* ⚠️Impossible de redéclarer une let ou const avec le même nom */

// let mainCharacter = "Bastien"

/* const */

const userName = "Anna8475";
// userName = "Marie6547"; // on ne peut pas réassigner une valeur à une const
console.log(userName);

/* var */

var test = "test";
test = "test2";
console.log(test);

/* ⚠️ Attention, on ne peut pas déclarer de constante sans les initialiser, contrairement aux var et let. */