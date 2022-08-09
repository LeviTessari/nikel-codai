const myModal = new bootstrap.Modal("#transection-modal");
let logged = sessionStorage.getItem('logged');
const session = localStorage.getItem("session");
let data = {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);

//Adicionar lançamento

document.getElementById("transections-form").addEventListener("submit", function(e){
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("data-input").value;
    const type = document.querySelector('input[nome="type-input"]:checked').value;

    data.transactions.unshift({
        value: value, type: type, description: description, date: date
    });

    saveData(data);
    
    e.target.reset();

    myModal.hide();
    alert("Lançamento adicionado com sucesso.");

});

checkLogged();

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(!logged){
        window.location.href="index.html";
        return;
    }
    const dataUser = localStorage.getItem(logged);
    if(dataUser){
        data= JSON.parse(dataUser);
    }
    console.log(data);
}

function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href= "index.html";
}
function saveData(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}