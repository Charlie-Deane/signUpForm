password = document.getElementById("password");
confirm_password = document.getElementById("confirm_password");
passwordNotification = document.getElementById("passwordNotification");

confirm_password.addEventListener('input', () => {
    if(password.value != '' && confirm_password.value != '' && password.value === confirm_password.value)
    {  
        confirm_password.style.borderColor = "green";
        confirm_password.style.borderStyle = "solid";
        confirm_password.style.borderWidth = "4px";
    }
    else if (confirm_password.value != '')
    {  
        confirm_password.style.borderColor = "red";
        confirm_password.style.borderStyle = "solid";
        confirm_password.style.borderWidth = "4px";
    }
});

password.addEventListener('input', () => {
    if(password.value != '' && confirm_password.value != '' && password.value === confirm_password.value)
    {  
        confirm_password.style.borderColor = "green";
        confirm_password.style.borderStyle = "solid";
        confirm_password.style.borderWidth = "4px";
    }
    else if (confirm_password.value != '')
    {  
        confirm_password.style.borderColor = "red";
        confirm_password.style.borderStyle = "solid";
        confirm_password.style.borderWidth = "4px";
    }
});