const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(username);
}

function onMovingToLink(event) {
    event.preventDefault();
    console.dir(event);
    console.dir(link);
    console.log(link.href);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onMovingToLink);

// 로그인 클릭시 form 없애기 - css로 적용하기
