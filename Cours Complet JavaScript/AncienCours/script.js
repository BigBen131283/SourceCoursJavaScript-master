//********************************************************************** */
// créer un objet :
//********************************************************************** */

const voiture = {
    marque: 'Ford',
    annee: 2009,
    couleur: 'Blanche',
    rouler(){
        // console.log("Vrooom");
    },
    year(){
        // console.log(this.annee)
    }
}

voiture.rouler();
voiture.year();

// console.log(voiture.hasOwnProperty('marque')); // renvoie un boolean en fonction de l'existence de la propriété ou non
// console.log(voiture.hasOwnProperty('roue'));

// console.log(Object.values(voiture)); // retourne un tableau avec toutes les valeurs des propriétés. 
// console.log((Object.keys(voiture))); // retourne un tableau avec toutes les clés

//********************************************************************** */
// Utiliser des classes
//********************************************************************** */
class Voiture {

    constructor(){
        this.marque = 'Ford';
        this.annee = 2009;
    }
    
}
const voiture1 = new Voiture();
// console.log(voiture1);

class Voiture2 {
    constructor(marque, annee, option){
        this.marque = marque;
        this.annee = annee;
        this.option = option;
    }
    rajoutOption(nomOption){
        this.option++;
        console.log(`Rajout de ${nomOption}, nombre d'option : ${this.option}`);
        return this; // important pour pouvoire chaîner les méthodes
    }
    dateSortie(){
        // console.log(`Date de sortie de cette voiture : ${this.annee}`);
    }

}
const voiture2 = new Voiture2('Renault', 2021, 0 );
const voiture3 = new Voiture2('Peugeot', 2018);
const voiture4 = new Voiture2('Citroën', 2023);
// console.log(voiture2, voiture3, voiture4);

//********************************************************************** */
// Créer des méthodes dans nos classes
//********************************************************************** */
voiture2.dateSortie()
// voiture3.dateSortie()
// voiture4.dateSortie()

//********************************************************************** */
// Les constructeurs natifs en JS
//********************************************************************** */

let str = new String('abc');
// console.log(str);

let nvDate = new Date();
// console.log(nvDate);

let regex = new RegExp(/abc/, 'g');
// console.log(regex);

//********************************************************************** */
// Faire des chaînes de méthodes
//********************************************************************** */

// console.log(voiture2);
// voiture2.rajoutOption('5 portes');
// voiture2.rajoutOption('Peinture');
// voiture2.rajoutOption('Pneus');

// voiture2
// .rajoutOption('Climatisation')
// .rajoutOption('GPS')
// .rajoutOption('Vitres');

// console.log(voiture2);

//********************************************************************** */
// Les sous classes
//********************************************************************** */

class Moto extends Voiture2 {

    assurance(){
        console.log("Vous avez pris une assurance !");
    }

}

const moto1 = new Moto('Suzuki', 2008, 0);
// console.log(moto1);
// moto1.dateSortie();
// moto1.assurance();

//********************************************************************** */
// Comprendre le Prototype
//********************************************************************** */

// console.log({a: 'a'});

// les prototypes permettent de créer des packages de méthodes communes à tous les objets qui ont les mêmes propriétés/méthodes :S

//********************************************************************** */
// Les fonctions constructeur
//********************************************************************** */

function Personnage(nom, taille){
    this.nom = nom;
    this.taille = taille;
    // this.avancer = function(){
    //     console.log(`${this.nom} avance...`);
    // }
}

Personnage.prototype.avancer = this.avancer = function(){
    console.log(`${this.nom} avance...`);
}

const perso1 = new Personnage("Raspoutine", 190);
const perso2 = new Personnage("Cesar", 175);

perso1.avancer();

console.log(perso1, perso2);