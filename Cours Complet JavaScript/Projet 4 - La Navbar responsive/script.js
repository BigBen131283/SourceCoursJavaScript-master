const btn = document.querySelector('.btn-responsive');
const liste = document.querySelector('.liste');

let toggle = false;

btn.addEventListener('click', () => {
    // toggle = !toggle;
    
    // if(toggle){
    //     liste.classList.add('visible');
    // }else{
    //     liste.classList.remove('visible');
    // }

    liste.classList.toggle('visible');
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 650){
        liste.classList.remove('visible');
    }
})