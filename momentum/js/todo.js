const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDoButton = document.getElementById("todo-button");


let toDos = [];

function onMouseClick(event) {
    toDoList.classList.toggle("hidden");
}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    event.preventDefault();
}

function paintToDo(newTodo) {
    const li = document.createElement("div");
    li.id = newTodo.id;
    li.className = "outerTodoList";
    
    const span = document.createElement("div");
    span.innerText = newTodo.text;
    span.className = "innerTodoList";

    const button = document.createElement("div");
    button.innerText = "❌";
    button.className = "removeButton";

    button.onclick = deleteToDo;
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

toDoButton.onclick = onMouseClick;


