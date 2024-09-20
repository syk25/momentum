const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const todos = []; // 2) 투두를 저장할 배열 선언

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo); // 3) 배열에 투두 추가하기
    paintTodo(newTodo);
}

/* NOTE: 투두리스트 저장하기 */
function saveTodo() { // 1) 함수 정의하기
    localStorage.setItem("todos", JSON.stringify(todos));  // 4) 투두리스트를 로커스토리지에 스트링 형태로 저장
}

function deleteTodo(event) {
    const li = event.target.parentNode;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    saveTodo(); // 5) 저장함수 추가
}

todoForm.addEventListener("submit", handleTodoSubmit);
