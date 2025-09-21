function ButtonFunctioning(){
    var FunctionButton = document.getElementById("para2");
        alert("Check Popular Destinations");
}

var form = document.getElementById("formid");
function submitForm(event){
    event.preventDefault();
}
form.addEventListener('submit',submitForm);