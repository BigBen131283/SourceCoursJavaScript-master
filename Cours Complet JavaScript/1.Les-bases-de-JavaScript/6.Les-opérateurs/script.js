/* 
    En JavaScript, les opérateurs servent à effectuer des calculs, assigner ou réassigner des valeurs, comparer, etc ... 

    Exemple : 5 + 10
    5 et 10 sont des opérandes, et + est un opérateur d'addition.

    Découvrons les principaux opérateurs.
*/

/* 
    1. Les opérateurs mathématiques. 

    +  Addition
    -  Soustraction
    () Parenthèses 
    *  Multiplication
    /  Division 
    %  Modulo 
    ** Exponentiel

*/
console.log(10 + 10);
console.log(55 % 10); // = reste de la division ici 5


/* 
    2. Les opérateurs de comparaison.

    Comparent deux opérandes et sont évalués à true ou false.

    >   Supériorité stricte.
    <   Infériorité stricte.
    <=  Inférieur ou égal.
    >=  Supérieur ou égal.
*/
console.log(10 > 2);
console.log( 2 <= 1);


/* 
    3. Les opérateurs d'égalité.

    Comparent l'égalité ou l'inégalité de deux opérandes et sont évalués true ou false.

    ==   Égalité simple.
    !=   Inégalité simple.
    ===  Égalité stricte.
    !==  Inégalité stricte.
*/

console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");

// On utilise toujours les inégalités strictes pour éviter les problèmes dans le code à cause du type

/* 
    4. Les opérateurs logiques.

    Permettent de comparer plusieurs opérandes.

    && ET  logique
    || OU  logique
    !  NON logique

*/
console.log(10 > 2 && 5 > 1);
console.log(10 < 2 && 5 > 1);
console.log(10 < 2 || 5 > 1);
console.log(10 < 2 || 5 < 1);

let test1 = true;
let test2 = true;
if(test1 && test2){
    console.log("Elles sont true");
}

//Bang operator
console.log(!true);
// exemple : Est-ce que test est false? 
let test = false;

console.log(test);
if(test){
    console.log("test est false");
}
if(!test){
    console.log("test est false"); // la condition est true, test = false, donc "test est false" se retrouve dans la console
}

/* 
    5. Les opérateurs d'affectation.

    Permettent d'affecter des valeurs après un calcul.

    let num = 10;

    ++, ex num++ équivaut à num = num + 1 // 11
    --, ex num-- équivaut à num = num - 1 // 9
    +=, ex num += 20 équivaut à num = num + 20 // 30
    -=, ex num -= 20 équivaut à num = num - 20 // -10
    *=, ex num *= 10 équivaut à num = num * 10 // 100

*/
let num = 10;
num = num + 1;
num++;
num += 99;
num--;
console.log(num);


/*
    Il existe beaucoup d'opérateurs plus confidentiels, mais il n'est pas utile de tous les passer en revue à ce stade de votre apprentissage.
*/