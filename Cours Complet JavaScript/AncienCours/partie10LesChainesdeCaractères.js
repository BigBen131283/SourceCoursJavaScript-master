const str = 'Lorem ipsum dolor sit amet.'

console.log(str.charAt(4));
console.log(str.includes('lorem'));
console.log(str.includes('Lorem'));
console.log(str.indexOf('ipsum'));
console.log(str.charCodeAt(4));

console.log(str.slice(15, 20)); // peut être négatif pour partir de la fin

const strToArray = str.split(' '); 
// rien en param = toute la chaîne un seul élément
// '' : chaque lettre devient un élément du tableau
// ' ' : chaque mot devient un élément du tableau
console.log(strToArray);
const strToArray2 = str.split('').join();
console.log(strToArray2);

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));

// Les REGEX

const regex = /[A-Z]/gi;

console.log(str.match(regex));

// REPLACE

console.log(str.replace(/l/gi, 'zzz'));