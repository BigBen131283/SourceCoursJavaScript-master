const onglets = Array.from(document.querySelectorAll('.onglets'));
// console.log(onglets);
const contenus = Array.from(document.querySelectorAll('.contenus'));

// avec querySelectorAll on obtient une nodeList, qui est une sorte d'objet itérable. Ce que l'on souhaite c'est pouvoir utiliser les méthodes des tableaux. On transforme donc la nodeList en tableau avec Array.from()


onglets.forEach(onglet => {
// pour chaque onglet j'ajoute un addEventlistener
    onglet.addEventListener('click', (e) => {

        for(let i = 0; i < onglets.length; i++){
            // Target vient de notre objet d'événements. C'est la cible sur laquelle on vient de cliquer
            if(onglets[i] === e.target){
                // si on vient de cliquer sur l'onglet on lui ajoute la class...
                onglets[i].classList.add('active-onglets');
            }else{
                // ... sinon on lui enlève
                onglets[i].classList.remove('active-onglets');
            }

        }
        // On peut récupérer l'index de l'onglet sur lequel on vient de cliquer
        // console.log(onglets.indexOf(e.target));

        for(let i = 0; i < contenus.length; i++){
            if(i === onglets.indexOf(e.target)){
                contenus[i].classList.add('active-contenu');
            }else{
                contenus[i].classList.remove('active-contenu');
            }

        }
    })

})