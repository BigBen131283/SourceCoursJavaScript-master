const container = document.querySelector('.container');
const balls = document.querySelectorAll('.ball');

// console.log(balls);

container.addEventListener('mousemove', (e) => {

    // val de départ * 100 / val totale
    const x = `${e.clientX * 100 / window.innerWidth}%`;
    const y = `${e.clientY * 100 / window.innerHeight}%`;

    for(let i = 0; i < 2; i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = `translate(-${x}, -${y})`;
    }

})