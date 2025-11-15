const submit = document.getElementById('submit');
const successMg = document.getElementById('success-message');
const inputs = document.querySelectorAll('input');
const message = document.getElementById("message");

// error messages

const emailFormatError = document.querySelector(".mail-error");
const radioError = document.querySelector("#choices .error");
const termsError = document.querySelector("#t-c .error");
const messageError = document.querySelector('#text-message .error');

message.addEventListener("focus",(e)=>{
    e.preventDefault();
    messageError.style.display='none'
    message.style.border= "1px solid hsl(186, 15%, 59%)";
})

inputs.forEach((input)=>{
    input.addEventListener('focus',(e)=>{
        e.preventDefault();
        successMg.style.display='none';   
        input.nextElementSibling.style.display = 'none';
        input.style.border= "1px solid hsl(186, 15%, 59%)";
        emailFormatError.style.display ='none';
        radioError.style.display ='none';   
        termsError.style.display ='none';   

    })
})

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let isValid = true;
    const firstname = document.getElementById('firstname');
     if(firstname.value === ''){
        firstname.nextElementSibling.style.display = 'block';
        firstname.style.border= "1px solid hsl(0, 66%, 54%)";
        isValid = false;
    }else firstname.nextElementSibling.style.display = 'none';
    
    const lastname = document.getElementById('lastname');
    if(lastname.value === ''){
        lastname.nextElementSibling.style.display = 'block';
        lastname.style.border= "1px solid hsl(0, 66%, 54%)"
        isValid = false;
    }else lastname.nextElementSibling.style.display = 'none';
    
    const email = document.getElementById("email");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value.trim() === ""){
        email.nextElementSibling.style.display = 'block';
        email.style.border= "1px solid hsl(0, 66%, 54%)"
        isValid = false;
    }else if (!emailRegex.test(email.value.trim())) {
        email.nextElementSibling.style.display = 'none';
        emailFormatError.style.display = 'block';
        email.style.border= "1px solid hsl(0, 66%, 54%)"
        isValid = false;
    }else{
        email.nextElementSibling.style.display = 'none';
        emailFormatError.style.display = 'none';
    }
    // general and support
    const general = document.getElementById("gn");
    const support = document.getElementById("sp");
    
    if (!general.checked && !support.checked) {
        radioError.style.display = "block";
        isValid = false;
    } else {
        radioError.style.display = "none";
    }

    // message 
     if (message.value.trim() === "") {
         messageError.style.display = 'block';
         message.style.border= "1px solid hsl(0, 66%, 54%)"
         isValid = false;
     } else {
         messageError.style.display = 'none'
         
     }
    
    const terms = document.getElementById("terms");

     if (!terms.checked) {
        termsError.style.display = "block";
        isValid = false;
    } else {
        termsError.style.display = "none";
    }

    if (isValid) {
        successMg.style.display = "block";
    }
})