// EXERCICE 2 : Les opérateurs, chaînes & fonctions.


// Écrivez une fonction qui retourne un nombre multiplié par deux en utilisant un paramètre.

function multiplierParDeux(nb) {
    return nb * 2;
}

multiplierParDeux(5);




//  Déterminez ce qui est vrai ou faux.

// let solde = 150 000;
// solde += 50 000; 
// Ce code permet d'assigner la valeur 50 000 à solde.
// Vrai ou Faux ?
// FAUX

let solde = 150000;
solde += 50000;

let resultat = 10 % 7;
// resultat est égal à 5.
// Vrai ou Faux ?
// FAUX (=3)

// let str = `J'ai besoin de $(nbPneus) pour ma voiture.`
// C'est la bonne façon d'intégrer une expression dans une chaîne.
// Vrai ou Faux ?
// FAUX
let str = `J'ai besoin de ${nbPneus} pour ma voiture.`
