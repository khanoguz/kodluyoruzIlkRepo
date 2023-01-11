// bolum sonu egzersizi 

/*
promptan alınan bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info ya yazdır.

AA: 90-100
BA: 85-89
BB: 80-84
CB: 75-79
CC: 70-74
DC: 65-69
DD: 60-64
FD: 50-59
FF: 0-49

Kullanıcınin girdigi verinin istedigimiz aralıkta olup olmadıgını kontrol et
ff bilgisinde uzgun surat ikonu cıkart, digerlerinde gülücük olsun.
ff class bilgisi text-danger, digerleri text-primary olsun.
*/

let grade = prompt("Ogrencinin puanini giriniz: ")
let info;
let smile = '<i class="fa-regular fa-face-smile"></i>'
if (grade>=0 && grade<=100)
{
    document.querySelector("#info").classList.add("text-primary")
    if (grade >= 90){
        info = "AA"
    }
    else if (grade >= 85){
        info = "BA"
    }
    else if (grade >= 80){
        info = "BB"
    }
    else if (grade >= 75){
        info = "CB"
    }
    else if (grade >= 70){
        info = "CC"
    }
    else if (grade >= 65){
        info = "DC"
    }
    else if (grade >= 60){
        info = "DD"
    }
    else if (grade >= 50){
        info = "FD"
    }
    else if (grade < 50){
        smile = '<i class="fa-solid fa-face-sad-tear"></i>';
        info = "FF";
        document.querySelector("#info").classList.remove("text-primary")
        document.querySelector("#info").classList.add("text-danger")

    }    
}
else{
    info = "wrong grade";
}
document.querySelector("#smile").innerHTML = smile
document.querySelector("#info").innerHTML = smile + info;