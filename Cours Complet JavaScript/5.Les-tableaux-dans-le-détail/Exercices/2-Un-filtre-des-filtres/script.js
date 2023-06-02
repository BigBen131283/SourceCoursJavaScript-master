/* 
    La méthode .filter() est très importante à maîtriser, mais peut être assez complexe à appréhender au départ.
    
    Mettez votre chapeau de filtreur en chef et résolvez ces différents problèmes.
*/


/* 
    A. Vers l'infini et l'au delà.

    Filtrez les entreprises dont le revenue annuel est supérieur à 500 milliards de dollars dans un nouveau tableau appelé "filteredCompanies" et retournez le dans la console.
*/

const companies = [
  {
    name: "Walmart",
    revenue: 600
  },
  {
    name: "Saudi Aramco",
    revenue: 552
  },
  {
    name: "Amazon",
    revenue: 513
  },
  {
    name: "Sinopec",
    revenue: 480
  },
  {
    name: "PetroChina",
    revenue: 480
  },
  {
    name: "Exxon Mobil",
    revenue: 398
  },
]

function revenueCheck(company){
  if(company.revenue > 500){
    return company.name
  }else{
    return false;
  }
}

const filteredCompanies = companies.filter(revenueCheck);
const filteredCompanies2 = companies.filter(company => company.revenue > 500);
console.log(filteredCompanies);
console.log(filteredCompanies2);

/* 
    B. Ménage de printemps.

    Supprimez toutes les valeurs falsy du tableau "values" ci-dessous.
    Retournez dans la console un tableau "truthyValues" contenant les valeurs restantes.
*/

const values = ["", undefined, "a", "a", 99, 0, true, false, 5, 5, 5];

function isFalsy(value){
  if(value === null || value ==="" || value === false || value === 0 || value === undefined || value === NaN || value === 0n || value === -0 || value === document.all){
    return false;
  }else{
    return true;
  }
}

const truthyValues = values.filter(isFalsy);
const truthyValues2 = values.filter(value => value);

console.log(truthyValues);
console.log(truthyValues2);

/* 
    C. Nom de nom.

    Retournez un nouveau tableau "filteredNames" contenant seulement les prénoms commençant par la lettre A et ayant une longueur minimale de 5.
*/

const names = ["Adrien", "Paul", "Victor", "Alexandre", "Aurélie", "Antoine"];

function isAllowed(name) {
  if(name.length >= 5 && name[0] === "A"){
    return true;
  }else{
    return false;
  }
}

const filteredNames = names.filter(isAllowed);
const filteredNames2 = names.filter(name => name[0] === "A" && name.length >= 5);
console.log(filteredNames);
console.log(filteredNames2);

