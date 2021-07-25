let btn = document.getElementById('btn');
let userName = document.getElementById('userName');
let userPassword = document.getElementById('userPassword');
let form = document.querySelector('#form');

function validateName () {  
    if ((/^[a-zA-Z0-9]{2,15}$/g).test(userName.value)) {
        userName.className = "valid";                     
    } else {
        userName.className = "invalid";       
    };
};

function validatePassword () {   
    if ((/^(?=.*[#$])[a-zA-Z0-9#$].{6,15}$/).test(userPassword.value)) {
        userPassword.className = "valid";               
    } else {
        userPassword.className = "invalid";                  
    };
};

form.addEventListener('change', () => {
    validateName();
    validatePassword(); 
});

btn.addEventListener('click', consoleData);
btn.addEventListener('click', () => {
    validateName();
    validatePassword(); 
});

function consoleData(evt) {      
    evt.preventDefault();         
    
    if ((/^[a-zA-Z0-9]{2,15}$/g).test(userName.value) && (/^(?=.*[#$])[a-zA-Z0-9#$].{6,15}$/).test(userPassword.value)) {
        console.log('Введенное Имя пользователя : ', userName.value);
        console.log('Введенный пароль : ', userPassword.value);        
        document.forms[0].reset();        
    } else {
        console.log('Введите имя и логин, имя должно быть длинной от 6 до 12 символов, а пароль должен быть длинной от 6 до 15 символов содержать символы $ и #');
    };  
};
























































// -----------------------------------------------------
// let btn = document.getElementById('btn');
// let userName = document.getElementById('userName').value;
// let userPassword = document.getElementById('userPassword');
// let form = document.querySelector('#form');


// form.addEventListener('submit', validateName);
// form.addEventListener('submit', validatePassword);

// function validateName () {
//     userName = document.getElementById("userName");    

//     if (userName.value.match(/^[a-zA-Z0-9]{2,15}$/g)) {
//         userName.style.border = "2px solid black";                
//     } else {
//         userName.style.border = "2px solid red";      
//         return;
//     };
// };

// function validatePassword () {
//     userPassword = document.getElementById("userPassword");

//     if (userPassword.value.match(/^[a-zA-Z0-9#$]{6,15}$/g) && userPassword.value.match(/[#]/g) && userPassword.value.match(/[$]/g)) {
//         userPassword.style.border = "2px solid black" ;          
//     } else {
//         userPassword.style.border = "2px solid red";           
//     };
// };

// form.addEventListener('change', reset);

// function reset () { 
//     validateName();
//     validatePassword();        
// };

// btn.addEventListener('click', consoleData);
// btn.addEventListener('click', reset);

// function consoleData(evt) {      
//     evt.preventDefault();  
//     userName = document.getElementById('userName');
//     userPassword = document.getElementById('userPassword');       
    
//     if (userName.value.match(/^[a-zA-Z0-9]{2,15}$/g) && userPassword.value.match(/^[a-zA-Z0-9$#]{6,15}$/g) && userPassword.value.match(/[#]/g) && userPassword.value.match(/[$]/g)) {
//         console.log('Введенное Имя пользователя : ', userName.value);
//         console.log('Введенный пароль : ', userPassword.value);        
//         document.forms[0].reset();        
//     } else {
//         console.log('Введите имя и логин, имя должно быть длинной от 6 до 12 символов, а пароль должен быть длинной от 6 до 15 символов содержать символы $ и #');
//     };  
// };