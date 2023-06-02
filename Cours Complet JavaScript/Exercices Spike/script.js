// Enlever les fruits qui ne sont pas des agrumes

const paniers1 =[
    {
        fruits: ["kiwi", "orange", "pomme", "citron"]
    },
    {
        fruits: ["kiwi", "orange", "pomme"]
    },
    {
        fruits: ["pamplemousse", "pomme"]
    },
    {
        fruits: ["poire", "pomme"]
    },
  ]
  
  
  function isAgrume(fruit) {
    return ["pamplemousse", "citron", "orange"].includes(fruit)
  }
  
  const nouveauPaniers = paniers1.map(panier => {
    return {fruits: panier.fruits.filter(isAgrume)}
  });
  
  console.log(nouveauPaniers);


// Retirer les fruits qui ne sont pas des agrumes, conserver la structure de paniers

const paniers2 =[
    {
        estUnSac: true,
        fruits: ["kiwi", "orange", "pomme", "citron"]
    },
    {   estUnSac: true,
        fruits: ["kiwi", "orange", "pomme"]
    },
    {
        fruits: ["pamplemousse", "pomme"]
    },
    {
        fruits: ["poire", "pomme"]
    },
]


function isAgrume(fruit) {
    return ["pamplemousse", "citron", "orange"].includes(fruit)
}