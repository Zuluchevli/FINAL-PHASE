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

        const user = { name, email, password, c_password };
        await addUser(user);

        if (user) {
            window.location.href = "login.html";
        }
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let email = document.getElementById("email").value
        let password = document.getElementById("pass").value

        try {
            const user = await loginUser(email, password);
            if (user) {
                alert("login successful....")
                window.location.href = "contectdetail.html";
            } else {
                alert("email and password not matched..")
            }
        } catch (err) {
            alert("login failed....")
        }
    })
}



if (Cot_form) {
    Cot_form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let cuuUser = JSON.parse(localStorage.getItem("CurrUser"))
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let contact = { cuuUser, name, email, phone }
        try {
            await addContact(contact);
            alert("Contact Added....")
            Cot_form.reset();
        }
        catch (err) {
            alert("failed to add contact....");
        }
    })
}