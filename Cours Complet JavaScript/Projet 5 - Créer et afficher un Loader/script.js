const contLoader = document.querySelector('.container-loader');


window.addEventListener('DOMContentLoaded', () => {

    if(sessionStorage.getItem('premierChargement') === null){
        contLoader.classList.add('fondu-out');
    }else{
        contLoader.style.display = 'none';
    }

    sessionStorage.setItem('premierChargement', 'fait');

})