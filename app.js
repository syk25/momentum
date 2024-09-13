const h1 = document.querySelector('div.hello:first-child h1');

// 클릭시 색이 교대로 바꾸는 기능 구현하기
// Q. 왜 변수에 대입해서 값을 바꿀 수가 없지? 왜 직접적으로 넣어야지?
function handleTitleClick() {
    const currentColor = h1.style.color; // getter
    let newColor; // setter
    if (currentColor === 'blue') {
        newColor = 'tomato'; // 색깔 설정
    } else {
        newColor = 'blue';
    }
    h1.style.color = newColor;
}

h1.addEventListener('click', handleTitleClick);

