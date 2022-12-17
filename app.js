const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); //login-form의 input
const greeting = document.querySelector("#greeting"); //hidden

const HIDDEN_CLASSNAME = "hidden"; //hidden
const USERNAME_KEY = "username";

//Login
function onLoginSubmit(event) {
  //브라우저 기본 동작 막기
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //localStorage: 브라우저 내에 키-값 쌍 저장
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

//반복되는 동작을 함수로 정의하여 paintGreeting()으로 사용
function paintGreeting(username) {
  greeting.innerText = `Hello ${username}❣
  have a nice day!`;
  // greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.style.color = 'blue';
  console.log(greeting.innerText);
  console.log(username);
}

//USERNAME_KEY = username = savedUsername
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //savedUsername === null -> form의 hidden_classname remove
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
