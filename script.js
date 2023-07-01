const form = document.getElementById('form')
const username = document.getElementById('username')
const cpf = document.getElementById('cpf')
const email = document.getElementById('email')
const passaword = document.getElementById('passaword')
const copassaword = document.getElementById('co-passaword')


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    checkForm();

    
    
})

username.addEventListener('blur',() => {
    checkInputUsername();
})

email.addEventListener('blur', ()=>{
    checkInputEmail();
})

cpf.addEventListener('blur', ()=> {
    checkinputcpf();
})



function checkInputpassaword(){
    const passawordValue = passaword.value;
    

    if (passawordValue === ''){
        errorinput(passaword, 'Digite uma senha')
    }else if(passawordValue.length < 8){
        errorinput(passaword, 'A senha precisa ter no minimo 8 caracteres!')
    }else{
        const formItem = passaword.parentElement;
        formItem.className = 'form-content'
    }
    
}


function checkInputcopassaword(){
    const passawordValue = passaword.value
    const copassawordValue = copassaword.value;

    if (copassawordValue === ''){
        errorinput(copassaword, 'Confirmação da senha é obrigatória!')
    }else if(copassawordValue.length !== passawordValue){
        errorinput(copassaword, 'As senhas não são iguais!')
    }else{
        const formItem = passaword.parentElement;
        formItem.className = 'form-content'
    }
    
}

function checkInputUsername(){
    const usernameValue = username.value;

    if (usernameValue === ''){
        errorinput(username, 'Nome Inconrreto')
    }else if(usernameValue.length < 4){
        errorinput(username, 'Nome precisa ter no minimo 4 caracteres!')
    }else{
        const formItem = username.parentElement;
        formItem.className = 'form-content'
    }
    
}



 
function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ''){
        errorinput(email, 'o email é obrigatorio')
    }else{
        const formItem = email.parentElement;
        formItem.className = 'form-content'
    }

    
}

function checkinputcpf(){
    const cpfValue = cpf.value;
    

    if(cpfValue === ''){
        errorinput(cpf, 'PREENCHA O CPF')        
    }else if(cpfValue.length < 11){
        errorinput(cpf, 'FALTA NUMERO NO CPF')
    }else{
        const formItem = email.parentElement;
        formItem.className = 'form-content'
    }

    
}


function checkForm(){
    checkInputUsername();
    checkinputcpf();
    checkInputEmail();
    checkInputpassaword();
    checkInputcopassaword();

    const formItems = form.querySelectorAll('.form-content')

    const isValid = [...formItems].every((item)=>{
        return item.className === 'form-content'
    });

    if(isValid){
        alert('CADASTRADO COM SUCESSO!')
    }

}




function errorinput(input, message){
    const formItem = input.parentElement; 
    const textMessage = formItem.querySelector('a')

    textMessage.innerText = message;
    formItem.className = 'form-content error'
}
