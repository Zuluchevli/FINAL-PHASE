let table = document.getElementById("tbl");

function load_contects() {
    let curr_user = JSON.parse(sessionStorage.getItem("Current_user"))

    let contect = JSON.parse(localStorage.getItem("contect"))

    for (let i = 0; i < contect.length; i++) {
        let cont_deta = contect[i]
        if (curr_user == cont_deta.curr_user) {
            let tr = document.createElement("tr")
            let obj = Object.values(cont_deta)
            for (let j = 0; j < obj.length; j++) {
                let td = document.createElement("td")
                td.textContent = obj[j]
                tr.appendChild(td)
            }
            table.appendChild(tr)

        }
    }
}
load_contects()