const title = document.querySelector('div.hello:first-child h1');
title.style.color = 'blue'; // 스타일도 조작 가능

/* 보통은 자바스크립트가 이벤트를 듣는다
이벤트란? 와피ㅏ 끊기, 클릭, 마우스 올리기, 내리기, 자스는 다 들을 수 있다. */
// 클릭 듣기

function handleTitleClick() {
    title.style.color = 'red'; // 색깔 설정
    console.log('title was clicked!');
}

title.addEventListener('click', handleTitleClick); // 태그가 이벤트를 듣도록 설정, 이벤트 발생시 함수 실행 + 괄호는 제외

/* 이벤트리스터 만드는 법
1. 태그 만들기
2. 태그에 이벤트리스터 정의하기
3. 함수 정의하기
4. 이벤트리스너 설정하기 */

function handleTitleMouseenter() {
    title.style.color = 'green';
    console.log('pointer on the mouse.');
}

function handleTitleMouseleave() {
    title.style.color = 'purple';
    console.log('pointer leaved the mouse.');
}

title.addEventListener('mouseenter', handleTitleMouseenter);
title.addEventListener('mouseleave', handleTitleMouseleave);
