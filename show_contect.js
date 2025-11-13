import { GetContact } from "./API/handle(api).js";

let cuuUser = JSON.parse(localStorage.getItem("CurrUser"))

async function load_contects() {
    let table = document.getElementById("tbl");

    let data = await GetContact();
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {

        if(cuuUser == data[i].cuuUser){
            let tr = document.createElement("tr")

            // name coloum
            let td1 = document.createElement("td");
            td1.textContent = data[i].name;
            // email coloum
            let td2 = document.createElement("td");
            td2.textContent = data[i].email;
            // phone coloum
            let td3 = document.createElement("td");
            td3.textContent = data[i].phone;

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)

            table.appendChild(tr)
        }
    
    }
}
load_contects()