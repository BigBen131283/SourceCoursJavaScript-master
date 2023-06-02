/* 
    Les chaînes de caractères, ou string en anglais, permettent de représenter du texte.
*/

/* 
    1. Intégrer des expressions dans des chaînes de caractères.
*/

let money = 457;

/* Ancienne façon de faire */

const userAccountInfo1 = "Il vous reste " + money + " euros sur votre compte";
console.log(userAccountInfo1);

/* Compliqué de faire des retours à la ligne \n, d'intégrer des expressions, échapper les apostrophes/guillemets, etc... */


/* "Nouvelle" façon de faire (2015+), cela permet de prendre en compte les retours à la ligne, d'éviter d'échapper les apostrophes, et facilite grandement l'intégration d'expression dans les chaînes.  */
/* On peut faire des calculs et appeler des fonctions dans les accolades. */

// Template litterals :
const userAccountInfo2 = `Il vous reste ${money} euros sur votre compte.`;
console.log(userAccountInfo2);

/* 
    2. La concaténation, ou l'assemblage de plusieurs chaînes.
*/

const chunk1 = "abc";
const chunk2 = "def";
const chunk3 = chunk1 + chunk2
console.log(typeof(chunk1 + 99));

/* 
    3. Quelques astuces : Sélectionner un caractère, retourner la longueur, etc...
*/

const userName = "Léonard de Vinci"; //ceci peut être considéré comme un objet quand on utilise des fonctions associées
console.log(userName.length);
console.log(userName[2]);
console.log(userName.indexOf("d"));
