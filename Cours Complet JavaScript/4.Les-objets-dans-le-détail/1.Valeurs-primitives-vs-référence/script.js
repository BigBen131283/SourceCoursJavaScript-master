/* 
    1. Valeurs primitives

    Les valeurs primitives sont les : string, number, bigint, boolean, undefined, symbol, null.
    Elles représentent des valeurs "simples" dans la mémoire : "abc", 15, true, etc...

*/

let userName1 = "Giovanni"; // valeur primitive
console.log(userName1); // "Giovanni"

let userName2 = userName1; // copie indépendante, valeur primitive
console.log(userName2);

userName1 = "Lucas";
console.log(userName1); // Lucas
console.log(userName2); // Giovanni



/* 
    2. Les valeurs de référence.

    Les objets sont des valeurs de référence, c'est-à-dire qu'ils vont prendre une place spéciale dans la mémoire.
    Si on copie un objet dans une autre variable, nous créons une référence, nous ne créons pas une copie indépendante.
*/

const dog1 = {
    name: "Tom",
    breed: "Golden"
}

let dog2 = dog1; // ici on fait une référence à l'objet dog1, on ne le copie pas. Si on change une valeur dans l'objet, quand on appelle dog2 on fait toujours référence à l'objet, donc ils sont dépendants

console.log(dog2);

dog1.name = "Max";
console.log(dog2); // on en présence d'une valeur de référence, on ne copie pas l'objet

// pour copier un objet il faut le recréer soi même à la main

const dog3 = {
    name: dog1.name, // valeur primitive
    breed: dog1.breed
}
console.log(dog3);

dog1.name = "Sam";
console.log(dog1);
console.log(dog2);
console.log(dog3);

/* 
    3. Pourquoi les chaînes ont des propriétés / méthodes ?

    Les valeurs primitives string, number, boolean et symbol sont transformées en objet lorsqu'on utilise l'opérateur "." qui sert à accèder à des propriétés.

    Cela permet d'avoir accès à des méthodes et des propriétés très pratiques.
*/

const str = "Lorem";
console.log(str.toUpperCase());

// new String("Lorem").toUpperCase()
console.log(new String("Lorem ipsum"));