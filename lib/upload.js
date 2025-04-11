
const now= new Date().toISOString().split('Z')[0];
//date with minutes only
document.getElementById("datetime").value = now.slice(0,16);

//send code
btn_send = document.getElementById("btn_send");
btn_send.addEventListener('click', function(){
    document.getElementById('form_upload').requestSubmit();
    //window.alert('Los datos han sido enviados');
    console.log('test');

});
