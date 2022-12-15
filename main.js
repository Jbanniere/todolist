// Créer une todolist
// Créer une fonction pour ajouter un élément
// Créer une fonction pour supprimer un élément

// a l'ajout d'une tâche l'input se vide
// créer un git 
// save dans localstorage
// les tâches peuvent être cochées
// créer un git
// Possibilité de créer plusieurs listes de tâches + à l'ajout d'une tache un select demande à quelle liste l'ajouter
// créer un git

let btn = null
let input = null
let ul = null
let array = []

// function pour ajouter les valeurs dans l'array
const addToArray = (title) => {
    const task = { title: title, id: array.length }
    array.push(task)
}

// function pour ajouter les valeurs de l'array dabs l'ul
const addToList = (titre) => {
    const id = Date.now()

    // creation du li
    const li = document.createElement("li")
    li.setAttribute("id", id)
    li.innerText = titre

    // creation du btn 
    const button = document.createElement("button")
    button.innerText = "Supprimer de la liste"

    li.appendChild(button)

    ul.appendChild(li)
    document.getElementById('input').value = ""

    console.log(ul)

    // Suppression de ligne
    button.addEventListener('click', () => {
        li.remove()
    })

}


document.addEventListener('DOMContentLoaded', () => {


    btn = document.getElementById('btn')


    btn.addEventListener('click', () => {

        input = document.getElementById('input').value
        ul = document.querySelector('ul')
        addToArray(input)
        addToList(input)


        // ul.innerHTML += `<li>${input}</li><button>Supprimer</button>`
        // input = " "
    })

})
