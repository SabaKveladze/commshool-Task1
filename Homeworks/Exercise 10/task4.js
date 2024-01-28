let num = prompt("Number = ")
function sum(num) {
    let arr = num.split("")
    let calc = arr.reduce((total,num) => Number(total) + Number(num))  
    return calc
}
alert("Answer = " + sum(num))