const clock = document.querySelector("h2#clock");

clock.innerText = "00:00";

// interval - 주가, 서버 등 일정 주기마다 가격확인할 때 사용
function sayHello() {
    console.log("Hello");
}

// 기다리기
setTimeout(sayHello, 5000);

// 반복하기
setInterval(getClock, 1000);

// 시계 만들기
// 패딩도 적용함
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // console.log(`${hours}:${minutes}:${seconds}`);
}

// 시계 만듦
// 패딩도 적용함
function setClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setClock();
setInterval(setClock, 1000);
