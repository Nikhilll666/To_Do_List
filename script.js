let addBtn = document.querySelector('#add');
let clearBtn = document.querySelector('#clear');  // Corrected ID 'Clear' to 'clear' as per HTML change

let todoItems = document.querySelector('.todo-items');

// Adding new todo item
addBtn.addEventListener('click', function () {
    let todoInput = prompt("Enter the todo item");

    // Prevent adding an empty todo item
    if (todoInput.trim() === "") {
        alert("Todo item cannot be empty!");
        return;
    }

    // Create the todo list item (li)
    let todoItem = document.createElement('li');
    todoItem.innerHTML = `
        <span>${todoInput}</span>
        <button class="delete">Delete</button>
    `;

    // Append the new item to the list
    todoItems.append(todoItem);
});

// Clear all todo items
clearBtn.addEventListener('click', function () {
    todoItems.innerHTML = "";  // Clear all items
});

// Delete a single todo item
todoItems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();  // Remove the clicked item
    }
});
