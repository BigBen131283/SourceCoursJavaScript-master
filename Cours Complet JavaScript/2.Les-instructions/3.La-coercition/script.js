/* 
    1. En JavaScript, certaines valeurs vont être converties en valeurs d'un autre type lorsqu'on les utilise dans des opérations ou des conditions, c'est la coercition de type. (type coercion).
*/

const nb1 = 150;
const nb2 = "150";

if(nb1 === nb2){
    console.log(`${nb1} est égal à ${nb2}`);
}else{
    console.log(`${nb1} et ${nb2} sont différents`);
}
if(nb1 == nb2){
    console.log(`${nb1} est égal à ${nb2}`);
}else{
    console.log(`${nb1} et ${nb2} sont différents`);
}


let bizarre = true + false;
console.log(bizarre);

let a = 1 + "10" // concaténation
console.log(a);
console.log(typeof a);

let b = 12 / "6"; // conversion
let c = "10" * 10;
console.log(b, c);
console.log(typeof b, typeof c);