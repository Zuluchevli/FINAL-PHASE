import { URL } from "./api.js";

export async function addUser(user){

    let result =await fetch(URL , {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(user)
    })
    alert("REGISTER COMPLETED")
    window.location.assign("http://127.0.0.1:5500/login.html");
}

export async function loginUser(email,pass) {
    let result = await fetch(`${URL}?email=${email}&pass=${pass}`)
    if(result.status == 200){
        let data = await result.json()
    }
    else{
        alert("invalid")
    } 
}

