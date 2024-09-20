const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

/* NOTE: 새로운 태그를 추가하는 방법 */
function paintTodo(newTodo) {
    const li = document.createElement("li"); // 새로운 요소 추가
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleTodoSubmit);
