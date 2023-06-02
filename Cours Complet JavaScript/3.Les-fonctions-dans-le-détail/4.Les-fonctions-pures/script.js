/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :

    A. Elle retourne toujours la même chose en fonction des mêmes paramètres.
    B. Elle n'utilise aucune valeur en dehors de sa portée et n'a pas d'effets secondaires en dehors de son bloc.

*/

function add(a,b){
    return a + b;
}

console.log(add(2,3)); // si j'appelle add avec ces mêmes paramètres elle me retourne toujours le même résultat.

let VAT = 20;
function getFinalPrice(rawPrice) {
    return rawPrice * (100 + VAT)/100
}

console.log(getFinalPrice(100));
console.log(getFinalPrice(100));
console.log(getFinalPrice(100));
console.log(getFinalPrice(100));
console.log(getFinalPrice(100)); // elle retourne toujours le même résultat avec le même paramètre, MAIS, elle utilise une valeur en dehors de sa portée, elle est donc impure.

function pureGetFinalPrice(rawPrice, VAT){
    return rawPrice * (1 + VAT/100);
}

console.log(pureGetFinalPrice(100, 30)); 
console.log(pureGetFinalPrice(100, 30)); 
console.log(pureGetFinalPrice(100, 30)); 
console.log(pureGetFinalPrice(100, 30)); // maintenant c'est pur.

function getViewPortWidth(){
    return window.innerWidth;
}

console.log(getViewPortWidth()); //innerWidth vient d'en dehors du scope de la fonction, impure