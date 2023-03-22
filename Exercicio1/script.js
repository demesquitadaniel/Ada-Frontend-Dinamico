const input = document.getElementById('input')
const table = document.getElementById('table')
const toDo = document.getElementsByClassName('toDo')

function insertToDo() {
    const input = input.value
    let numberItems = toDo.length
    table.insertAdjacentHTML('afterbegin', '<tbody id="' + (numberItems + 1) + '" class="toDo"><tr><td>' + input + '</td><td><button onclick="deleteToDo('+ (numberItems + 1) +')">Delete</button></td></tbody>')
    input.value = ''
}

function deleteToDo(id) {
    const toDo = document.getElementById(id)
    toDo.remove()
}

function cleanUpList() {
    const lista = toDo.length
    for(let i = 0; i < lista; i++) {
        deleteToDo(i+1)
    }
}