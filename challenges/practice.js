const edge = document.getElementById("edge");
const guess = document.getElementById("guess");
const play = document.getElementById("play");
const winOrLose = document.getElementById("win");

// 무작위 숫자 고르기
function makeNumber() {
    const randomNumber = Math.floor(Math.random() * edge.value);
    return randomNumber;
}

// 내 숫자 만들고 저장하기
function saveGuessedNumber() {
    const guessedNumber = guess.value;
    return Number(guessedNumber);
}

function handlePlay(event) {
    event.preventDefault(); // 이벤트의 기본동작 방지(ex. 페이지 새로고침)
    const machineNumber = makeNumber(); // 기계 숫자
    const userNumber = saveGuessedNumber(); // 내가 고른 숫자
    
    document.getElementById(
        "result"
    ).innerText = `You chose ${userNumber}, the machine chose ${machineNumber}.`;

    console.log(typeof machineNumber, typeof userNumber);
    if (machineNumber === userNumber) {
        winOrLose.innerText = "You Win!";
    } else {
        winOrLose.innerText = "You Lost!";
    }
}

play.addEventListener("click", handlePlay);
