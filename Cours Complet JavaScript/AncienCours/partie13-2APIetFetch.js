const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn');
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () => {
//     // console.log("Hello World");
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    
//     xhr.responseType = 'json';
    
//     xhr.onload = function(){
//         // console.log(JSON.parse(xhr.response));
//         console.log(xhr.response);

//         for(i = 0; i < xhr.response.length ; i++){
            
//             let newLi = document.createElement('li');
//             let newTitreCarte = document.createElement('h2');
//             let newBodyCarte = document.createElement('p');

//             newTitreCarte.innerText = xhr.response[i].title;
//             newBodyCarte.innerText = xhr.response[i].body;

//             newLi.appendChild(newTitreCarte);
//             newLi.appendChild(newBodyCarte);

//             liste.appendChild(newLi);
//         }
//     }

//     xhr.send();

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            for(i = 0; i < data.length ; i++){
                
                let newLi = document.createElement('li');
                let newTitreCarte = document.createElement('h2');
                let newBodyCarte = document.createElement('p');

                newTitreCarte.innerText = data[i].title;
                newBodyCarte.innerText = data[i].body;

                newLi.appendChild(newTitreCarte);
                newLi.appendChild(newBodyCarte);

                liste.appendChild(newLi);
            }
    });
})

// console.log(fetch('https://jsonplaceholder.typicode.com/posts'));