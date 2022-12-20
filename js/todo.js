const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); //JSON.stringify(): string으로 변환
}

//click btn -> todolist > li delete
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //li tag 생성
  const span = document.createElement("span"); //span tag 생성

  //span에 text 넣음 = newTodo는 유저가 form에서 작성한 값
  span.innerText = newTodo;

  //button 생성
  const button = document.createElement("button");
  button.innerText = "❌"; //button text 변경
  //button click event
  button.addEventListener("click", deleteTodo);

  //append는 맨 마지막에 놓아야 함!
  //span, button을 li 내부에 넣음
  li.appendChild(span);
  li.appendChild(button);

  //ul tag에 li 추가
  toDoList.appendChild(li);
}

function handelToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";

  //push – 요소를 스택 끝에 집어넣음
  toDos.push(newTodo);

  //화면에 띄움
  paintToDo(newTodo);

  //toDos array를 localStorage에 넣음
  saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);
