const todos = []; // Initialize an empty array to store todos.

// Function to add a new todo.
function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim(); // Trim to remove leading/trailing white spaces.

  if (todoText !== '') {
    todos.push(todoText); // Add the todo to the array.
    todoInput.value = ''; // Clear the input field.
    displayTodos(); // Update the list.
  }
}

// Function to display todos in the list.
function displayTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Clear the list before updating.

  todos.forEach(function (todo, index) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${todo} <button onclick="removeTodo(${index})">Delete</button>`;
    todoList.appendChild(listItem);
  });
}

// Function to remove a todo by its index.
function removeTodo(index) {
  todos.splice(index, 1); // Remove the todo from the array.
  displayTodos(); // Update the list.
}