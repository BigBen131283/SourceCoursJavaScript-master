/* 
    1. Les opérations "Short circuit"

    Les expressions utilisant des opérateurs logiques (||, &&) retournent des valeurs.

    Le ET logique retourne le second opérande si le premier et le second opérande sont évalués comme truthy.

    Le OU logique retourne le premier opérande s'il est évalué comme truthy, ou le second si c'est ce dernier qui est truthy. 
*/

let isAuthenticated = true;
const user = {
  name: "Hanz",
  level: 99
}


console.log(isAuthenticated && user); // retourne le second operande
console.log(user && isAuthenticated); // retourne le second operande

isAuthenticated = false;

console.log(isAuthenticated && user); // l'une des deux conditions est false 
console.log(user && isAuthenticated); // l'une des deux conditions est false 

console.log(isAuthenticated || user); // retourne le premier operande qui est truthy
console.log(user || isAuthenticated); // retourne le premier operande qui est truthy
isAuthenticated = true;
console.log(isAuthenticated || user); // retourne le premier operande qui est truthy
console.log(user || isAuthenticated); // retourne le premier operande qui est truthy