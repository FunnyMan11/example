const header = document.getElementById("header")
const paragraph = document.getElementById("paragraph")
const input = document.getElementById("input")

function foo(){
    fetch(`https://jsonplaceholder.typicode.com/todos/${input.value}`)
    .then(response => response.json())
    .then(data => {
        header.textContent = data.id;
        paragraph.textContent = data.title;
    })
}