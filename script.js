import { addUser, loginUser } from "./API/handle(api).js";

let registerForm = document.getElementById("register_form");
let loginForm = document.getElementById("login_form");


if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let name = document.getElementById("name").value;
        let email = document.getElementById("Email").value;
        let password = document.getElementById("Password").value;
        let c_password = document.getElementById("c_password").value;


        const user = { name, email, password, c_password }

        console.log(user);
        await addUser(user)
        // window.location.href = "show-content.html"
        registerForm.reset()

    })
}

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let email = document.getElementById("email").value
        let password = document.getElementById("pass").value

        await loginUser(email, pass);
    })
}