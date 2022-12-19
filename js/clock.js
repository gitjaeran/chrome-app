const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//getClock 호출
// -> 호출하지 않고 setInterval을 실행하면 맨 처음 화면에 00:00:00이 뜬다.
getClock();
setInterval(getClock, 1000); //매 초마다 getClock 다시실행
