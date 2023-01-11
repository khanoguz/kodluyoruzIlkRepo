let name_ = prompt("Adinizi girin: ");
if (name_){
    document.querySelector("#myName").innerHTML = name_;
}
else{
    document.querySelector("#myName").innerHTML = "Noname"
}

let currentDate = document.querySelector("#deneme")
function currentTime(){
    let currentHours = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSecond = new Date().getSeconds();
    let currentDay = new Date().getDay();
    
    switch(currentDay){
        case 1:
            currentDay = "Pazartesi"
            break;
        case 2:
            currentDay = "Sali";
            break;
        case 3:
            currentDay = "Carsamba";
            break;
        case 4:
            currentDay = "Persembe";
            break;
        case 5:
            currentDay = "Cume";
            break;
        case 6:
            currentDay = "Cumartesi";
            break;
        case 7:
            currentDay = "Pazar";
            break;
    }

    currentDate.innerHTML = `${currentHours}:${currentMinute}:${currentSecond} ${currentDay}`
}


setInterval(currentTime, 1000);