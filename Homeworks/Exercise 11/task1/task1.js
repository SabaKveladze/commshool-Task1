    
function task(){
    console.log("haee")
    let num = document.querySelector(".inputClass")
    let p = document.querySelector(".answer")
    let str = ""
    for(let i = 0; i<num.value; i++){
        str += "* ".repeat(num.value)+ "<br/>"
       
    }
    p.innerHTML=str
    console.log()
}