// Les opérateurs

let nb1 = 0;

nb1 -= 5;

console.log(nb1);

// Les chaînes

// let str = "Hello World" + "Bye World";

// Meilleure méthode
// template litterals
let nb = 999;
let str = `"Hello Word" 
'Bye' 
${nb}
${5 +5}`;

console.log(str);

// Les fonctions

function presentation(prenom) {
    
    return `Je m'appelle ${prenom}`
}
console.log(presentation("Benjamin"));
