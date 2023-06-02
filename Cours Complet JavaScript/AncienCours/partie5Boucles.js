// const tab1 = [1,2,3,4,5];

// for(const element of tab1){
//     console.log(element);
// }

// const tesla = {
//     couleur : "grise",
//     portes : 5,
//     prix : 100000
// }

// for(const prop in tesla){
//     console.log(`${prop}: ${tesla[prop]}`);
// }

// let i = 10;image.png

// while(i >=0){
//     console.log(i);
//     i--;
// }

// do {
//     console.log(i);
//     i--;
// }while(i>=0)

try {
    console.log("Début du test");

    fonctionInnexistante();

    console.log("Quelque chose qui ne sera jamais loggé");
}
catch(err){
    // console.log(`Erreur : ${err}`);
    console.log(err);
}
finally{
    console.log("On envoie quelque chose après le try et/ou le catch");
}