/*****************************************************************/

var inputEmailRegister = document.querySelector('#emailRegister');
var inputUserRegister = document.querySelector('#userRegister');
var inputPassRegister = document.querySelector('#passRegister');
var inputPass2Register = document.querySelector('#pass2Register');
var inputAddressRegister = document.querySelector('#addressRegister');
var selectUbication = document.querySelector('#ubicationRegister');
var checkTerms = document.querySelector('#termsConditions');

var emailRegister = document.querySelector('#emailRegisterMsg');
var userRegister = document.querySelector('#userRegisterMsg');
var passRegister = document.querySelector('#passRegisterMsg');
var pass2Register = document.querySelector('#pass2RegisterMsg');
var addressRegister = document.querySelector('#addressRegisterMsg');
var ubicationRegister = document.querySelector('#ubicationRegisterMsg');
var terms = document.querySelector('#termsMsg');

function validationRegister(event){
    if(inputEmailRegister.value == ''){
        emailRegister.style = 'display: block';
        inputEmailRegister.style = 'border: 1px solid red;';
        inputEmailRegister.style = 'background-color: #e94848;';
        inputEmailRegister.focus();
        event.preventDefault();
    }else if(inputUserRegister.value == ''){
        userRegister.style = 'display: block;';
        inputUserRegister.style = 'border: 1px solid red;';
        inputUserRegister.style = 'background-color: #e94848;';
        inputUserRegister.focus();
        event.preventDefault();
    }else if(inputPassRegister.value == ''){
        passRegister.style = 'display: block;';
        inputPassRegister.style = 'border: 1px solid red;';
        inputPassRegister.style = 'background-color: #e94848;';
        inputPassRegister.focus();        
        event.preventDefault();
    }else if(inputPass2Register.value == ''){
        pass2Register.style = 'display: block;';
        inputPass2Register.style = 'border: 1px solid red;';
        inputPass2Register.style = 'background-color: #e94848;';
        inputPass2Register.focus();        
        event.preventDefault();
    }else if(inputAddressRegister.value == ''){
        addressRegister.style = 'display: block;';
        inputAddressRegister.style = 'border: 1px solid red;';
        inputAddressRegister.style = 'background-color: #e94848;';
        inputAddressRegister.focus();
        event.preventDefault();    
    }else if(selectUbication.value == ''){
        ubicationRegister.style = 'display: block;';        
        selectUbication.focus();
        event.preventDefault();
    }else if(!checkTerms.checked){
        terms.style = 'display: block;';
        console.log("no checkeadoooooooooooooo");
        event.preventDefault();
    }else if(inputPassRegister.value == inputPass2Register.value){
        alert("las contraseñas no son iguales");
    }else{
        alert("se registro el usuario");
    }

}


document.addEventListener('DOMContentLoaded', function() {
    /*llama al form de Rgisttro */
    var fRegister = document.getElementById('formRegister');
    fRegister.addEventListener('submit', validationRegister);
});

inputEmailRegister.addEventListener('input', function(){
    if(inputEmailRegister.value.length >= 1){
        emailRegister.style = 'display: none;';
        inputEmailRegister.style = 'border-color: black';
        inputEmailRegister.style = 'background-color: white;'
    }
});

inputUserRegister.addEventListener('input', function(){
    if(inputUserRegister.value.length >= 1){
        userRegister.style = 'display: none;';
        inputUserRegister.style = 'border-color: black';
        inputUserRegister.style = 'background-color: white;'
    }
});

inputPassRegister.addEventListener('input', function(){
    if(inputPassRegister.value.length >= 1){
        passRegister.style = 'display: none;';
        inputPassRegister.style = 'border-color: black';
        inputPassRegister.style = 'background-color: white;'
    }
});

inputPass2Register.addEventListener('input', function(){
    if(inputPass2Register.value.length >= 1){
        pass2Register.style = 'display: none;';
        inputPass2Register.style = 'border-color: black';
        inputPass2Register.style = 'background-color: white;'
    }
});

inputAddressRegister.addEventListener('input', function(){
    if(inputAddressRegister.value.length >= 1){
        addressRegister.style = 'display: none;';
        inputAddressRegister.style = 'border-color: black';
        inputAddressRegister.style = 'background-color: white;'
    }
});

selectUbication.addEventListener('change', function(){
    if(selectUbication.value != '') {
        ubicationRegister. style = 'display: none;';
    }
});

checkTerms.addEventListener('change', function(){
    if(checkTerms.checked) {
        terms.style = 'display: none;'
    }
});