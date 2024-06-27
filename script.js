const header = document.getElementById("header");
const paragraph = document.getElementById("paragraph");

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            console.log(item);

            // Create a new paragraph element for each todo item
            const todoItem = document.createElement("p");
            todoItem.textContent = `ID: ${item.id}, Title: ${item.title}`;
            
            // Append the new paragraph to the paragraph div
            paragraph.appendChild(todoItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));