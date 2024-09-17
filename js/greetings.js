const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

// 반복되는 값은 상수로 지정
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username;";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

// 함수로 중복 코드 제거
function paintGreetings(username) {
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${username} !`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}
