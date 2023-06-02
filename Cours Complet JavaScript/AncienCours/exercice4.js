// EXERCICE 4 : Conditions, comparaisons, boucles ...

// 1. Loggez dans la console le résultat de l'expression d'une opération ternaire.
// Si metreCarre est supérieur à 70, loggez "Grand logement", si c'est inférieur, loggez "Logement petit/moyen".
// Vous pouvez voir les résultats de la console sur codepen en bas à gauche.

let metreCarre = 100;

let logement = metreCarre > 70 ? "Grand logement" : "Logement petit/moyen"
console.log(logement);

// 2. Créez une boucle for qui affiche dans la console une suite de nombres de 100 à 0 en pas de 1.
// 100,99,98,97,96 ...

for(let i = 100; i >= 0; i--){
    console.log(i);
}