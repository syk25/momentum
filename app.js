const h1 = document.querySelector('div.hello:first-child h1');
h1.style.color = 'blue'; // 스타일도 조작 가능

/* 보통은 자바스크립트가 이벤트를 듣는다
이벤트란? 와피ㅏ 끊기, 클릭, 마우스 올리기, 내리기, 자스는 다 들을 수 있다. */
// 클릭 듣기

function handleTitleClick() {
    h1.style.color = 'red'; // 색깔 설정
    console.log('h1 was clicked!');
}

h1.addEventListener('click', handleTitleClick); // 태그가 이벤트를 듣도록 설정, 이벤트 발생시 함수 실행 + 괄호는 제외

/* 이벤트리스터 만드는 법
1. 태그 만들기
2. 태그에 이벤트리스터 정의하기
3. 함수 정의하기
4. 이벤트리스너 설정하기 */

function handleH1Mouseenter() {
    h1.style.color = 'green';
    console.log('pointer on the mouse.');
}

function handleH1Mouseleave() {
    h1.style.color = 'purple';
    console.log('pointer leaved the mouse.');
}

function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
    alert('copier!');
}

function handleWindowOffline() {
    alert('SOS! No Wifi!');
}

function handleWindowOnline() {
    alert('All Good! Wifi Online!');
}

h1.addEventListener('mouseenter', handleH1Mouseenter);
h1.addEventListener('mouseleave', handleH1Mouseleave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
