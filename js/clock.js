const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//getClock 호출
// -> 호출하지 않고 setInterval을 실행하면 맨 처음 화면에 00:00:00이 뜬다.
getClock();
setInterval(getClock, 1000); //매 초마다 getClock 다시실행
