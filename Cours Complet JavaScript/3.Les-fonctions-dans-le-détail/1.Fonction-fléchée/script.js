/* 
    1. Les fonctions fléchées.

    Apparues en 2015, elles sont plus concises et pratiques dans certains cas, mais moins lisibles dans d'autres.
    Elles ont également quelques différences de fonctionnement avec les fonctions classiques.
    Il ne faut pas les opposer, mais les utiliser judicieusement, en fonction de leurs caractéristiques.

*/

function getSquareArea(side){
    return side * side;
}
console.log(getSquareArea(50));

const getSquareArea2 = size => size * size;
console.log(getSquareArea2(60));

// const getSquareArea2 = (size) => {
//     return size * size;
// }

[1,2,3].forEach(item => console.log(item));

[4,5,6].forEach(function(item){
    return console.log(item);
});