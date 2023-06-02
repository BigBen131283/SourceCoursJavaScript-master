// EXERCICE 8 : Les fonctions 🔥




// 1. Écrire une fonction pure qui sert à multiplier deux nombres ensemble.



const multiply = (a,b) => a * b;
console.log(multiply(2,3)); 




// 2. Écrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau rempli de nombres.
//   Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles on a ajouté 1


const tab = [10,20,30,40,50,60];

function modifyArray(arr, func){
    const modifiedArray = [];

    for(let i=0; i < arr.length; i++){
        modifiedArray.push(func(arr[i]));
    }
    return modifiedArray;
}

const addOne = modifyArray(tab, el => el+1);

console.log(addOne);

