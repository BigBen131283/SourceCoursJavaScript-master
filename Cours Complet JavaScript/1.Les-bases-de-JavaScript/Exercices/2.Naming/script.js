/* 
    1. Naming. 
    
    Sans décommenter les variables ci-dessous, devinez celles qui ont un nom non-réglementaire, c'est à dire celles qui vont provoquer une erreur lors de l'exécution de votre code par le navigateur.
    Rajoutez un commentaire à côté de chaque variable //correct ou //faux.

*/

    // LET UsErNaMe = "John";     //faux
    // const _id = 99;  // correct mais peu utilisé
    // let class = true; // faux, class est un mot clé qu'il faut éviter
    // const isAdult = true; // correct
    // const $card = {name: "card", content: "Lorem ipsum"}; // faux... Si ! c'est correct, on peut utiliser le $ même si on évite de le faire
    // let 1452 = 1452; // faux
    // const sum41 = "music"; // correct


/* 
    2. Trouver un bon nom; 

    Essayez de trouver un bon nom à ces variables, puis déclarez-les avec ce nom et la valeur correspondante.

    A. Une let qui retourne un booléen en fonction de la présence d'un joueur en ligne.
    B. Une let qui retourne un booléen en fonction des droits d'un rôle "modérateur".
    C. Une const qui contient un tableau de nombres représentants des salaires.
    D. Une let contenant des informations sur la météo du jour.
    E. Une let qui contient la hauteur d'une page web.
    F. Une const qui contient un message d'alerte.

    Même chose pour des fonctions.

    G. Une fonction qui retourne les données d'un utilisateur
    H. Une fonction qui retourne un booléen si l'utilisateur est adulte.
    I. Une fonction qui crée un bouton
    J. Une fonction qui ajoute une animation 
*/

//A.
let isConnected = true;
//B. 
let isModerator = false;
//C.
const salaries = [2450,1850,4712,3254,2000,1578]
//D. 

const dailyMeteo = {
    temperature : 27,
    humidity: 45,
    wind: 14
}
let currentWeather ={
    temperature : 27,
    humidity: 45,
    wind: 14 
}

// E
let pageHeight = 4251;
let scrollHeight = 4251;
// F
const alertMessage = "Vous ne pouvez pas faire ça"
// G
function getUser(){}
function getUserInfo(){}
// H
// function checkMajority(age){
//     if(age > 18){
//         isAdult = true;
//     }else{
//         isAdult = false;
//     }
// }
function isAdult(){}
// I
function createButton(){}
// J
function addAnimation(){}

