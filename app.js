// 목표: 제목을 클릭할 때마다 색을 바꾸는 기능 구현
const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    /* NOTE: classList 속성, contains, remove 메서드 */
    // const clickedClass = 'active';
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass); // 변경하기보다는 클래스 제거
    // } else {
    //     h1.classList.add(clickedClass); // 변경하기보다는 클래스를 추가
    // }
    // console.log(h1.className);

    /* NOTE: 위의 방법을 한줄로 표현 */
    h1.classList.toggle('active');
}

h1.addEventListener('click', handleTitleClick);
