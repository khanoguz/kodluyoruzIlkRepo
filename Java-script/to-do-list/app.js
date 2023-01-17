
function newElement(){
    const newTask = document.querySelector("#task");
    if(!newTask.value){
        alert("bos gorev eklenemez");
    }
    else{
        const newElement = document.createElement("li");
        newElement.innerHTML = `${newTask.value}`
        document.querySelector("#list").appendChild(newElement);
        newTask.value="";
    
        let button = document.createElement("button");
        let txt = document.createTextNode("X");
        button.appendChild(txt);
        button.classList = "btn btn-danger cancel-button";
        newElement.appendChild(button);
    
        let closeButtons = document.querySelectorAll(".cancel-button");
        for(let i=0;i<closeButtons.length;i++){
            closeButtons[i].onclick = function(){
                let div = this.parentElement;
                div.style.display = "none";
                localStorage.removeItem(this.counter)
            }
        }
    
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.classList = "form-check-input check-box";
        newElement.appendChild(checkbox);
    
        let checkboxes = document.querySelectorAll(".check-box");
        for(let i=0;i<checkboxes.length;i++){
            checkboxes[i].addEventListener("change", function(){
                let div = this.parentElement;
                div.classList = "over-line"
            });
        }
    }
    
}