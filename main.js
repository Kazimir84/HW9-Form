let btn = document.getElementById('btn');
let userName = document.getElementById('userName').value;
let userPassword = document.getElementById('userPassword');
let form = document.querySelector('#form');


form.addEventListener('submit', validateName);
form.addEventListener('submit', validatePassword);

function validateName () {
    userName = document.getElementById("userName");    

    if (userName.value.match(/^[a-zA-Z0-9]{2,15}$/)) {
        userName.style.border = "2px solid black";                
    } else {
        userName.style.border = "2px solid red";      
        return;
    };
};

function validatePassword () {
    userPassword = document.getElementById("userPassword");

    if (userPassword.value.match(/^[a-zA-Z0-9#$]{6,15}$/) && userPassword.value.match(/[#]/) && userPassword.value.match(/[$]/)) {
        userPassword.style.border = "2px solid black" ;          
    } else {
        userPassword.style.border = "2px solid red";           
    };
};

form.addEventListener('change', reset);

function reset () { 
    validateName();
    validatePassword();        
};

btn.addEventListener('click', consoleData);
btn.addEventListener('click', reset);

function consoleData(evt) {      
    evt.preventDefault();  
    userName = document.getElementById('userName');
    userPassword = document.getElementById('userPassword');       
    
    if (userName.value.match(/^[a-zA-Z0-9]{2,15}$/) && userPassword.value.match(/^[a-zA-Z0-9$#]{6,15}$/) && userPassword.value.match(/[#]/) && userPassword.value.match(/[$]/)) {
        console.log('Введенное Имя пользователя : ', userName.value);
        console.log('Введенный пароль : ', userPassword.value);        
        document.forms[0].reset();        
    } else {
        console.log('Введите имя и логин, имя должно быть длинной от 6 до 12 символов, а пароль должен быть длинной от 6 до 15 символов содержать символы $ и #');
    };  
};