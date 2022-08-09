const myModal = new bootstrap.Modal("#transection-modal");
let logged = sessionStorage.getItem('logged');
const session = localStorage.getItem("session");
let data = {
    tramsactions: []
};

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
}
