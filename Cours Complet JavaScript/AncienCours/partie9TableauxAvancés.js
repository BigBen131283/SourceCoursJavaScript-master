tableau.push('z'); // ajoute l'élément 'z' au tableau
tableau.pop(); // enlève le dernier élément du tableau
tableau.shift(); // enlève le premier élément du tableau
tableau.unshift('a', 'z'); // ajoute des éléments au début du tableau

tableau.splice(0,2) // index de départ, nombre d'éléments à retirer, élément à rajouter, élément à rajouter, élément à rajouter, etc...

tableau.splice(0,0,'x','y')



console.log(tableau);
console.log(tableau.indexOf('z')); // donne l'index de 'z'
console.log(tableau[0]); // les tableaux commencent à l'index 0
console.log(tableau.slice(2,4)); // créé un nouveau tableau à partir du tableau : à partir de l'index... , jusqu'à l'index ... 

const tableau1 = ['e','f','g','h','i'];
const tableau2 = ['z','x','y'];

const tableau3 = tableau1.concat(tableau2);
const tableau4 = tableau2.concat(tableau1);

console.log(tableau3);
console.log(tableau4);

console.log(tableau3.includes('j'));
console.log(tableau3.includes('f'));

const multiTab = [1,2,3,[1,2,3,[4]]];
console.log(multiTab);
console.log(multiTab.flat()); // applatit un tableau multi dimensionnel
console.log(multiTab.flat(2));

const fruits = ['Fraise', 'Pomme' , 'Raisin', 'Kiwi', 'Pastèque'];
console.log(fruits.join()); // transforme le tableau en une chaîne de caractères
console.log(fruits.join('')); // indique ce qui sépare les éléments

function usingCallback(callback){
    callback();
}

usingCallback(function(){
    console.log("Hello depuis la callback");
});

const numTab = [1,2,3,4];

// FOREACH

// numTab.forEach(function(el){
//     console.log(el);
// });

// MAP
// Retourne un nouveau tableau avec les valeurs appliquées sur les éléments

// const resultMap = numTab.map(function(x){
//     return x*2;
// })
// console.log(resultMap);

// const addiMap = numTab.map((x)=> x+1)
// console.log(addiMap);

// FILTER

const resultFilter = fruits.filter(function(fruit){
    return fruit.length > 5;
})
console.log(resultFilter);

const resultFilter2 = fruits.filter(fruit => fruit.length > 6)
console.log(resultFilter2);

// REDUCE
// Réduit un tableau en accumulant ses valeurs

const numTab2 = [1,2,3,4];
const reduced = numTab2.reduce(function(a,b){
    return a + b;
}, 100)
// a = accumulateur, b = valeur courante
// le second argument indique le point de départ de l'accumulateur
console.log(reduced);

// FOR (boucle)

for(let i = 0; i < numTab.length; i++){
    console.log(`Index ${numTab[i]-1} a pour valeur : ${numTab[i]}`);
}