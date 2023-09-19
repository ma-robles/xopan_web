//sel code
//
const btn_upload = document.getElementById('btn_upload');
btn_upload.addEventListener("click", selID);
function selID(){
    ID= document.getElementById('plantel').value;
    alert("Se mostrarán los datos de "+ID);
    plot(ID);
}

//send code
const now= new Date().toISOString().split('Z')[0];
document.getElementById("datetime").value = now;
btn_send = document.getElementById("btn_send");
btn_send.addEventListener('click', function(){
    document.getElementById('form_upload').requestSubmit();
    window.alert('Los datos serán  enviados');

});
