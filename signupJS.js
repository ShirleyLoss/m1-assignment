var contact_method = document.getElementById("contact_method");
var contact_Info_Label = document.getElementById("contact_Info_Label");
var contact_Info_Input = document.getElementById("contact_Info_Input");


function contactMethodChange(){
    if (contact_method.value == "Email"){
        contact_Info_Label.innerHTML = "Enter your email";
        contact_Info_Input.style.visibility = "visible";
    } else if (contact_method.value == "Phone") {
        contact_Info_Label.innerHTML = "Enter your phone";
        contact_Info_Input.style.visibility = "visible";
    } else {
        contact_Info_Label.innerHTML = "";
        contact_Info_Input.style.visibility = "hidden";
    }
}

contact_method.addEventListener("change", contactMethodChange);
