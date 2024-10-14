let inputField = document.getElementById("username");
let saveButton = document.getElementById("save-btn");
let clearButton = document.getElementById("clear-btn");
let display = document.getElementById("display-name");

if (localStorage.getItem('displayName')){
    display.innerHTML = localStorage.getItem('displayName');
}


saveButton.addEventListener("click", function(){
    if (inputField.value === ""){
        alert("name field is empty!");
    }

    else{
        localStorage.setItem('displayName', inputField.value);
        display.innerHTML = inputField.value;
    }
});

clearButton.addEventListener("click", function(){
    if (localStorage.getItem('displayName')){
        localStorage.removeItem('displayName');
    }

    display.innerHTML = "";
});