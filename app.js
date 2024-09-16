/* 사용자 이름 검증하기 
input은 조건을 미리 정할 수 있다
*/
/* 브라우저가 새로고침하지 않고도 정보를 저장하기 */

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
function onLoginSubmit(info) {
    info.preventDefault();
    console.log(info);
}

function onMovingToLink(event) {
    event.preventDefault();
    console.dir(event);
    console.dir(link);
    console.log(link.href);
}

/* 링크 클릭시 alert으로 중지하고 event 정보 받아오기 */

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onMovingToLink);
// 이벤트 실행시 헨들러 실행 + 첫번째 인수로 이벤트 발생 시 이벤트에 대한 내용을 객체로 전달
