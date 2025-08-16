function handleclick() {
  const password = document.getElementById("password");
  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");
}

const isLoggedIn = true;
const details = document.getElementById("details");
const btn = document.getElementById("btn");
const head = document.getElementById("head");

isLoggedIn && details.remove();

isLoggedIn ? (head.innerHTML = "Sign in") : (head.innerHTML = "Sign Up");

isLoggedIn ? (btn.innerHTML = "Login") : (btn.innerHTML = "Register");


