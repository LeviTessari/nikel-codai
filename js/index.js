const myModal = new bootstrap.Modal("#register-modal");
//Logar no sistema

document.getElementById("login-form").addEventListener("submit", function(e){
e.preventDefault();
const email = document.getElementById("email-input").value;
const password = document.getElementById("password-input").value;
const session = document.getElementById("session-check").checked;

const account = getAccount(email);

    if(!account) {
        alert("Opps! Verifique o usuário ou a senha.");
        return;
    }
    if(account){
        if( account.password !== password){
            alert("Opps! Verifique o usuário ou a senha.");
            return;
        }
        window.location.href = "home.html"
    }
   


});

//Criar conta
document.getElementById("create-form").addEventListener("submit", function(e){e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;
    if(email.length<5){
        alert("Preencha o campo com um e-mail válido.");
        return;
    }
    if(password.length<4){
        alert("Preencha a senha com no mínimo 4 digitos.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []

        }
    );

    myModal.hide();
    alert("Conta criada com sucesso!");
});
function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}
function getAccount(key){
    const account = localStorage.getItem(key);
    if(account){
        return JSON.parse(account);
    }
    return "";
}