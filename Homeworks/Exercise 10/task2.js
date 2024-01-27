let num1 = +prompt("NUMBER 1 = ?")
let num2 = +prompt("NUMBER 2 = ?")
let operation = prompt("which operation do you want? hint: use these options --> +,-,*,/")
let answer;
function calculator(num1,num2,operation) {
    if(operation == "+"){
        answer = alert("Answer = " + num1 + num2)
    }else if(operation == "-"){
        answer = alert("Answer = " + num1 - num2)
    }else if(operation == "*"){
        answer = alert("Answer = " + num1 * num2) 
    }else if(operation == "/"){
        answer = alert("Answer = " + num1 / num2) 
    } 
    return answer;
}
console.log (calculator(num1,num2,operation))