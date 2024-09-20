const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
/* NOTE:
데이버테이스는 todos이지 localStorage가 아니다.
localStorage는 메모리와 유사한 역할을 한다.

todos를 리스트 대신에 객체로 바꾼다
키는 무작위 아이디로 사용한다. -> Date.now() 활용

배열을 삭제한다는 것은 해당 원소를 지우고 완전히 새로운 배열을 만드는 것이다: filter
[1,2,3,4].filter(func): true이면 해당 원소 포함, false면 거절함
 */

let todos = [];
const TODOS_KEY = "todos";

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObject = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObject);
    paintTodo(newTodoObject);
    saveTodo();
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((item) => item.id != li.id);
    saveTodo();
    li.remove();
}

function loadTodos() {
    const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

    if (savedTodos != null) {
        const parsedTodos = savedTodos;
        todos = parsedTodos;
        parsedTodos.forEach((item) => paintTodo(item));
    }
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

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
