/* 
    1. Création d'objet.

    Créez un objet restaurant contenant une méthode fléchée waiter qui exécute un console.log("Que desirez-vous ?") lorsqu'elle est appelée.

    Créez également les propriétés theme(thème du restaurant(Japonais, Italien, Libanais, ...)) et name avec les valeurs que vous souhaitez.
*/

const restaurant = {
    waiter: () => console.log("Que désirez vous?"),
    theme: {
        japanese: "Japonais",
        italian: "Italien",
        libanese: "Libanais"
    },
    name: {
        japanese: "Les délices de Kyoto",
        italian: "Le val d'Aoste",
        libanese: "Beyrouth underground"
    }
}

restaurant.waiter();

/* 
    2. Liste des props.

    Trouvez deux moyens de créer un tableau contenant toutes les props de l'objet ci-dessous.
  
*/

const dam = {
    name: "Grand Coulee Dam",
    capacity: 6.809,
    height: 168,
    length: 1592,
    volume: 9155942
  }
  
console.log(Object.keys(dam));
console.log(Object.getOwnPropertyNames(dam));

// Correction

const arrayFromProps = [];

for(const prop in dam){
    arrayFromProps.push(prop);
}
console.log(arrayFromProps);
  
  /* 
      3. Copie
  
      Copiez, à l'aide du spread operator, les valeurs du tableau names dans un nouveau tableau namesCopy.
      Changez la valeur du dernier prénom du tableau names en "Tom".
  
      Sans utiliser la console, est-ce qu'il y a un problème de réfèrence, ou pas ?
  */
  
  const names = ["Jack", "Paul", "Lucas"];
  const namesCopy = [...names];
  console.log(namesCopy);

  names[2] = "Tom";
  console.log(names);

  // non il n'y a pas de pb de référence parce que c'est une valeur primitive
  console.log(namesCopy);
  