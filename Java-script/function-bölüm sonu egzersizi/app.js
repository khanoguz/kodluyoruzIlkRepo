let counter = 0
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

document.querySelector("#counter").innerHTML = counter;

increase.addEventListener("click", function (){
    document.querySelector("#counter").innerHTML = ++counter;
    document.querySelector("#counter").style.color = "blue";
    document.querySelector("#symbol").innerHTML = '<i class="fa-solid fa-arrow-up"></i>'
})

decrease.addEventListener("click", function(){
    document.querySelector("#counter").innerHTML = --counter;
    document.querySelector("#counter").style.color = "red";
    document.querySelector("#symbol").innerHTML = '<i class="fa-solid fa-arrow-down"></i>'
})