// 목표: 제목을 클릭할 때마다 색을 바꾸는 기능 구현
const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    /* NOTE: 직접 CSS를 변경하는 법 */
    // const color = h1.style.color; // getter
    // let newColor; // setter
    // if (color === 'blue') {
    //     newColor = 'tomato';
    // } else {
    //     newColor = 'blue';
    // }
    // h1.style.color = newColor; // setting color
    // h1.innerText = 'Changed the Color.';
    // console.log('Changed the color');

    /* NOTE: HTML태그를 변경하는 법 */
    // h1.className = 'active'; // 클래스 네임을 변경해버림 -> 결과적으로 css 적용
    const name = h1.className; // h1.className은 getter 이자 setter
    const clickedClass = 'active';
    let newName;
    if (name === clickedClass) {
        newName = '';
    } else {
        newName = clickedClass;
    }
    h1.className = newName;
    console.log(name);
}

h1.addEventListener('click', handleTitleClick);
