import { ContactUrl, URL } from "./api.js";

export async function addUser(user) {

    let result = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    alert("REGISTER COMPLETED");
    window.location.href = "login.html";
}

export async function loginUser(email, pass) {
    let result = await fetch(`${URL}?email=${email}&pass=${pass}`);
    let data = await result.json();

    if (data.length != 0){
        alert("login successfull")
        localStorage.setItem("CurrUser",JSON.stringify(email));
        return;
    }
    else{
        alert("Email and Password Not Match")
    }
}

export async function addContact(contact){
    
    fetch(ContactUrl,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(contact)
    })
}

export async function GetContact(){
    let res = await fetch(ContactUrl);
    let data = res.json();
    return data;
}