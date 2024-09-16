/* 사용자 이름 검증하기 
input은 조건을 미리 정할 수 있다
*/
/* 브라우저가 새로고침하지 않고도 정보를 저장하기 */

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginButtonClick() {
    const userName = loginInput.value;
    console.log(userName);
}

loginButton.addEventListener("click", handleLoginButtonClick);
