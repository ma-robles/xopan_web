//sel code
//
const sel_plantel= document.getElementById('plantel');
sel_plantel.addEventListener("change", selID);
function selID(){
    ID= document.getElementById('plantel').value;
    alert("Se mostrarán los datos de "+ID);
    plot(ID);
}

