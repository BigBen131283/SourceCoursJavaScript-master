/* 
    1.Les méthodes.

    Une méthode est une propriété d'un objet contenant une fonction.
    On appelle une méthode en utilisant le nom de la propriété qui lui est associée.

*/

const athlete = {
    name: "Tom",
    // fonction fléchée
    jump: () => { 
        console.log("Jump");
        console.log(this);
    },
    // fonction classique
    swim: function(){
        console.log("Swim");
        console.log(this);
        console.log(this.name);
    },
    // fonction raccourcie de la fonction classique
    run(){
        console.log("Run");
        console.log(this);
    } 
}

// athlete.jump();
// athlete.swim();
// athlete.run();

// Le Mot clé this

// Il y a une différence entre l'utilisation d'une fonction classique et de la méthode raccourcie : l'utilisation de "this" (mot clé)

// Avec la méthode classique, this fait référence au contexte appelant est l'objet. Donc le console.log(this) log l'objet
athlete.swim();

// Avec la fonction fléchée, this fait référence au contexte englobant aka... Window
athlete.jump();

// Avec la méthode raccourcie -> c'est une fonction classique, contexte appelant
athlete.run();





