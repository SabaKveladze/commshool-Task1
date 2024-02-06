let table = document.body.firstElementChild;
let trs= table.querySelectorAll('tr')

for (let i = 0; i<trs.length;i++){
    table.rows[i].cells[i].style.backgroundColor = "red"
}