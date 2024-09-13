const h1 = document.querySelector('div.hello:first-child h1');

// 클릭시 색이 교대로 바꾸는 기능 구현하기
// Q. 왜 변수에 대입해서 값을 바꿀 수가 없지? 왜 직접적으로 넣어야지?
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === 'blue') {
        newColor = 'tomato'; // 색깔 설정
    } else {
        newColor = 'blue';
    }
    h1.style.color = newColor;
}

h1.addEventListener('click', handleTitleClick); // 태그가 이벤트를 듣도록 설정, 이벤트 발생시 함수 실행 + 괄호는 제외

/* 이벤트리스터 만드는 법
1. 태그 만들기
2. 태그에 이벤트리스터 정의하기
3. 함수 정의하기
4. 이벤트리스너 설정하기 */
