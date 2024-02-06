
let modal = document.getElementById("myModal");


let btn = document.getElementById("exploreBtn");


let span = document.getElementsByClassName("close")[0];

const overlay = document.querySelector(".overlay")

const finanzaLogoImg = document.querySelector(".finanzaLogoImg")

const burgerMenuToggle = document.querySelector(".burgerMenu")
const burgerMenuIcon = document.querySelector(".burgerMenuIcon")

function givingActiveClass(){
    burgerMenuToggle.classList.toggle("active")
    overlay.classList.toggle("active")
    finanzaLogoImg.classList.toggle("inActive")
}

const burgerDropDownToggle = document.querySelector(".burgerDropDownWrapper")
const burgerPages= document.querySelector(".burgerPages")
burgerPages.addEventListener("click", () => {
    burgerDropDownToggle.classList.toggle("active")
})


overlay.addEventListener("click", () => {
    burgerMenuToggle.classList.toggle("active")
    overlay.classList.toggle("active")
    finanzaLogoImg.classList.toggle("inActive")
})

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





let currentSlide = 0;
const slides = document.querySelectorAll('.sliderImg img');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

showSlide(currentSlide);






const telnom = document.querySelector(".telNom")

function numberInputValidation(input){
    
    let regex = /^\+995\d{0,9}$/;
    if (!regex.test(input.value)) {
    input.value = "+995" 
    }
    
}
const tagp = document.getElementsByClassName("tagP") 
const tagTextp  = document.getElementsByClassName("tagTextP") 

function tabTextChanging(index){

    switch(index){
        case 1:
            checkActive();
            tagp[0].classList.add("activeTagP")
            tagTextp[0].innerHTML= "Fluffy clouds drift lazily across the azure sky, casting fleeting shadows on the lush green landscape below. "
            tagTextp[1].innerHTML= "Birds chirp melodiously in the trees, their songs carrying on the gentle breeze."
            break
        case 2:
            checkActive();
            tagp[1].classList.add("activeTagP")
            tagTextp[0].innerHTML= "A babbling brook meanders through the meadow, its crystal-clear waters shimmering in the sunlight. "
            tagTextp[1].innerHTML= "Wildflowers bloom in vibrant hues, painting the fields with splashes of color. "
            break
        case 3:
            checkActive();
            tagp[2].classList.add("activeTagP")
            tagTextp[0].innerHTML= "Nature's symphony plays out harmoniously, creating a scene of tranquil beauty."
            tagTextp[1].innerHTML= "The moon rises majestically, bathing the landscape in a silver glow."
            break
    }
}
function checkActive(){
    for(let i = 0; i < 3; i++){
        if(tagp[i].classList.contains("activeTagP")){
            tagp[i].classList.remove("activeTagP")
        }
    }
}
tabTextChanging(1)

