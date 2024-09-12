/* classname 가져오는 법 - 원소들을 가져옴 */
// const hellos = document.getElementsByClassName('hello'); // 배열

/* tag이름으로 태그 가져오는 법 */
// const hello = document.getElementsByTagName('h1'); // 배열

/* 추천!  쿼리 셀렉터 = css의 선택자처럼 태그를 가져옴*/
// const title = document.querySelector('.hello h1'); // hello 클래스 내의 태그 가져옴 - css 선택자 활용
// const title2 = document.querySelector('div h1');

// 태그가 여러개 존재하더라도 쿼리셀렉터는 첫번째꺼만 가져옴

const title = document.querySelector('.hello');
const titleAll = document.querySelectorAll('.hello');

// console.log(title);
// console.log(title2);
console.log(title.innerText);
console.log(titleAll.innerText);

title.innerText = 'Hello';
