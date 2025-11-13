import { addContact, addUser, loginUser } from "./API/handle(api).js";

let registerForm = document.getElementById("register_form");
let loginForm = document.getElementById("login_form");
let Cot_form = document.getElementById("cont_form");


if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let name = document.getElementById("name").value;
        let email = document.getElementById("Email").value;
        let password = document.getElementById("Password").value;
        let c_password = document.getElementById("c_password").value;

        if (password !== c_password) {
            alert("password and confirm password not Matched....")
            return;
        }

        const user = { name, email, password, c_password }

        console.log(user);
        await addUser(user)
        // window.location.href = ""
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


let cuuUser = JSON.parse(localStorage.getItem("CurrUser"))

if (Cot_form) {
    CON_form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        if (cuuUser) {
            let contact = { cuuUser, name, email, phone }
            await addContact(contact);
           alert("Contact Added....")
           return;
        }
        else{
            alert("login First");
        }
    })
}