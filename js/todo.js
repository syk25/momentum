const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

/* NOTE: 생성된 태그 삭제하기 */
function deleteTodo(event) {
    // 4) 이벤트 헨들러 정의
    const li = event.target.parentNode;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button"); // 1) 삭제 버튼 생성
    button.innerText = "❌"; // 2) 버튼에 넣을 글자 추가
    button.addEventListener("click", deleteTodo); // 3) 이벤트 헨들러 등록 템플릿

    li.appendChild(span);
    li.appendChild(button); // 5) 삭제 버튼을 문서에 추가
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleTodoSubmit);
