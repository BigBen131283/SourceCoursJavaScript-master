// let x =2;

// const add1 = y => x += y;
// x = x+y

// console.log(x);
// add1(5);
// console.log(x);
// add1(5);
// console.log(x);
// add1(5);
// console.log(x);
// add1(5);
// console.log(x);
// add1(5);
// console.log(x);

// add1 est une fonction impure car elle modifie la valeur de x en dehors de sa portée

// const add2 = (a,b) => a + b;

// add2 est une fonction pure car si a et b ont la même valeur, add2 retourne le même résultat sans changer la valeur de a et de b


// Les fonctions callback

// const tab = [1,2,3];

// tab.forEach(item => {
//     console.log(item);
// })

// function customForEach(arr, callback){

//     for(let i = 0; i < arr.length; i++){
//         callback(arr[i])
//     }

// }

// customForEach(tab, (item) => {
//     console.log(item);
// })

// Les fonctions d'ordre supérieur
// C'est une fonction qui au choix utilise une fonction en paramètre soit en retourne une, soit les 2

// const values = [50,250,650,850,980,2000];

// function customFilter(arr, func) {
//     const filtered = [];

//     for(let i = 0; i < arr.length; i++){
//         if(func(arr[i])) {
//             // signifie si arr[i] est true
//             filtered.push(arr[i]);
//         }
//     }

//     return filtered;
// }
// const filteredArr = customFilter(values, el => el > 100);
// // el => el > 100 est une fonction fléchée
// // function (el){
// //     return el > 100;
// // }

// // La fonction passée en second argument est modulable. Ainsi customFilter peut être utilisée de différentes façons selon les besoins

// console.log(filteredArr);

// Les fonctions auto-invoquées

// (function () {
//     console.log('Hello World');
// })()

// La récursion (un peu comme une boucle)

// function recursion(num){
//     num++;

//     if(num > 10){
//         console.log(`C'est bon ! ${num}`);
//     }else{
//         recursion(num);
//     }
// }

// recursion(5);

