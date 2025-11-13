import { ContactUrl, URL } from "./api.js";

export async function addUser(user) {

    let result = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    alert("REGISTER COMPLETED");
    window.location.href = "index.html";

    console.log(result);
}

export async function loginUser(email, pass) {
    let result = await fetch(`${URL}?email=${email}&password=${pass}`);

    let data = await result.json();

    if (data.length != 0) {
        localStorage.setItem("CurrUser", JSON.stringify(email));
        alert("login successfull")
        return true;
    }
    else {
        return false;
    }
}

export async function addContact(contact) {

    return await fetch(ContactUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
    })
}

export async function GetContact() {
    let res = await fetch(ContactUrl);
    let data = res.json();
    return data;
}