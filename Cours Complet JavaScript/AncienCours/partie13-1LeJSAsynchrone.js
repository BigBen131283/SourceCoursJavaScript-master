// Set Timeout et Set Interval

const timeout = setTimeout(presentation, 2000);

console.log("Hello");

// clearTimeout(timeout); // empêche l'exécution du setTimeout

function presentation(){
    console.log("Hello World");
}

console.log("Hello");

setTimeout(() => {console.log("Toujours un set timeout avec une fonction fléchée cette fois ci");}, 3000);

let compteur = 0;

// setInterval(incr, 1000);

function incr() {
    compteur++;
    console.log(compteur);
}

// Les promesses

const promise1 = new Promise((resolve, reject) => {

    console.log("Hello async");

    resolve('les données sont arrivées')
    // reject('les données ne sont pas arrivées')
    
})

promise1.then((value) => {
    console.log(value);
}).catch(() => {
    console.log("Il y a eu une erreur");
});

console.log(promise1);

// Async et Await... utiliser des promesses plus facilement

async function foo(){
    // async exécute une promesse qui s'auto-résoud. 
    // return 999;
    // cela permet d'écrire des promesses à l'intérieur

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Action effectuée !'), 4000);
    })

    let resultat = await p1;
    console.log(resultat);

    // permet de faire plein de requêtes ou d'actions asynchrones et de pouvoir ensuite manipuler les données comme on veut

}



// foo().then(console.log); //associé au return 999
foo()