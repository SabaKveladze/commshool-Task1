let example = getComputedStyle(div1)
let newMarginForDiv = example + 10 +"px"
document.getElementById('div1').marginLeft = 20
console.log(example.marginLeft)