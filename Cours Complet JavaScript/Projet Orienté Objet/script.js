const bookList = document.querySelector('.book-list');
const bookForm = document.querySelector('.book-form');
const container = document.querySelector('.container');

class Book {
    constructor(titre, auteur, annee){
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }

    addBookToList(book){
        
        // on créé la rangée
        const row = document.createElement('tr');
        
        // on remplit la rangée
        row.innerHTML = `
        <td>${book.titre}</td>
        <td>${book.auteur}</td>
        <td>${book.annee}</td>
        <td><button class="delete">X</button></td>`;

        // on rajoute la rangée à la liste
        bookList.appendChild(row);
    }

    // On créé une méthode pour vider les champs après avoir ajouté un livre
    clearFields(){
        document.getElementById('titre').value = "";
        document.getElementById('auteur').value = "";
        document.getElementById('annee').value = "";
    }

    showAlert(message, className){

        const alert = document.createElement('div');
        alert.className = `alert ${className}`;
        alert.appendChild(document.createTextNode(message));
        container.insertBefore(alert, bookForm);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2500)
    }
}

class Interface {
    deleteBook(target) {
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }
}

bookForm.addEventListener('submit', (e) => {
    // on évite d'actualiser la page quand on clique sur le boutton
    e.preventDefault();

    // on récupère la valeur des champs
    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;

    const book = new Book(titre, auteur, annee);

    if(titre === "" || auteur === "" || annee === ""){
        book.showAlert('Remplissez les champs !', 'error')
    }else{
        book.addBookToList(book);
        book.clearFields();
        book.showAlert('Livre ajouté', 'success')
    }

})

bookList.addEventListener('click', (e) => {
    // On peut cliquer n'importe où dans la book-list qui est le tableau
    // si l'endroit où on clique a la classe delete on enlève le grand-père de cet élément (<tr>)
    const ui = new Interface();

    ui.deleteBook(e.target);
})