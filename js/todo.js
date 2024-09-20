const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];
const TODOS_KEY = "todos";

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todos.push(newTodo);
    paintTodo(newTodo);
    todoInput.value = "";
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentNode;
    li.remove();
}

/* NOTE: 투두 로딩하기 */
function loadTodos() {
    const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY)); // 1) 아이템 불러오기

    // 2) 로컬스토리지에서 아이템 로딩하기
    if (savedTodos != null) {
        const parsedTodos = savedTodos;
        todos = parsedTodos; // 3) 전역변수 갱신하기(스테이트와 유사역할)
        parsedTodos.forEach((item) => paintTodo(item)); // NOTE: forEach 함수, 화살표함수 4) 모든 요소를 화면에 띄우기
    }
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

    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

loadTodos();
