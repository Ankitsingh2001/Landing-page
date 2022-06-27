
const toggle = document.querySelector(".rakhi-11-aug")

toggle.addEventListener("click", displayMenu );
 function displayMenu(){
    const element = document.querySelector(".toggle-rakhi-item");
    element.classList.toggle("myElement")  
 }

const toggle2 = document.querySelector("#GANESH-CHATURTHI-31-AUG")
toggle2.addEventListener("click", displayMenu2 );
 function displayMenu2(){
    const element2 = document.querySelector("#toggle-2");
    element2.classList.toggle("myElement")  
 }

const toggle3 = document.querySelector("#HEALING-CRYSTALS")
toggle3.addEventListener("click", displayMenu3 );
 function displayMenu3(){
    const element = document.querySelector("#toggle-3");
    element.classList.toggle("myElement")  
 }
 
const toggle4 = document.querySelector("#HOME-DECOR")
toggle4.addEventListener("click", displayMenu4 );
 function displayMenu4(){
    const element = document.querySelector("#toggle-4");
    element.classList.toggle("myElement")  
 }
