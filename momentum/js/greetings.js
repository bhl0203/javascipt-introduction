const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const logoutButton = document.getElementById("Log-Out");

const USERNAME_KEY = "username";


const savedUsername = localStorage.getItem(USERNAME_KEY);



function onLoginSubmit(event) {
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    location.reload();
}

function onLogOut(event) {
    localStorage.removeItem(USERNAME_KEY);
    logoutButton.classList.toggle("hidden");
    //event.preventDefault();
    location.reload();
}

function paintGreetings(username) {
    greeting.classList.toggle("hidden");
    greeting.innerText = `Hello ${savedUsername}.`;
}


if (savedUsername === null) {
    //show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
    logoutButton.classList.toggle("hidden");
    console.log(savedUsername);
    logoutButton.onclick = onLogOut;
}
