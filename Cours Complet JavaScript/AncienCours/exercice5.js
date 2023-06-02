// EXERCICE 5 : Boucles, mots clés, déclarations

// 1. Affichez à l'aide d'une boucle "for..in" toutes les valeurs des propriétés de cet objet dans la console.

const capitales = {
    autriche : "Vienne",
    argentine : "Buenos Aires",
    estonie : "Tallinn",
    australie : "Cambera"
  }

for(const prop in capitales){
    console.log(`${prop}: ${capitales[prop]}`);
}
  
  // 2. Idem mais avec une boucle "for..of" et ce tableau.
  
  const fruits = ['Fraise', 'Cerise', 'Orange', 'Citron', 'Ananas'];

  for(const element of fruits){
    console.log(element);
  }
  
  // 3. Créez une fonction qui sert à repérer si un texte qu'on lui passe en argument contient la lettre "z".
  // si c'est le cas, la fonction écrit dans la console "Alerte: le texte contient la lettre Z".

  let text1 = "Texte sans la lettre interdite"
  let text2 = "Vous me confirmez que le texte ne comprends pas la lettre interdite? Ze ne vous crois pas !"

  function boucleTexte(text) {
    // const forbiddenLetterMaj = "Z";
    // const forbiddenLetterLow = "z";
    for(const element of text){
        // console.log(typeof(element));
        if(element === "z" || element === "Z"){
            console.log("Alerte: le texte contient la lettre Z");
            break;
        }

    // }
    // console.log(`Alerte: le texte ${text.includes(forbiddenLetterMaj, forbiddenLetterLow) ? 'contient' : 'ne contient pas'} la lettre ${forbiddenLetterLow}`);
    }
  }
  
  boucleTexte(text2);
  
  
  