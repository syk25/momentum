/* 해야할 일
1. 사용자에게 이름 묻기
2. 정보를 저장하기
3. 스크린에게 보여주기 */
/* 모든것은 html에서 시작된다. */

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginButtonClick() {
    console.dir(loginInput.value); // element의 속성을 찾으려고할 때 사용하자. 예를 들어 input에 값을 넣고 새로고침할 때 변화 찾기

    console.log("click");
}

loginButton.addEventListener("click", handleLoginButtonClick);
