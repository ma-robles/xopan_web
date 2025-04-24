function addRow(tab, fecha, rain, btnText){
    const row = document.createElement('tr');
    const cellDate = document.createElement('th');
    const cellRain = document.createElement('td');
    const cellBtn= document.createElement('td');
    const inBtn = document.createElement('input');
    inBtn.type = 'button';
    inBtn.value = 'Borrar';
    inBtn.addEventListener('click', function(){
        //window.alert('Los datos han sido enviados');
        localStorage.removeItem(fecha );
        location.reload();

    });
    console.log(fecha);
    cellDate.textContent = fecha
    cellRain.textContent = localStorage.getItem(fecha);
    cellBtn.appendChild(inBtn);
    row.appendChild(cellDate);
    row.appendChild(cellRain);
    row.appendChild(cellBtn);
    tab.appendChild(row);

}

function addRowInput(tab){
    const row = document.createElement('tr');
    const cellDate = document.createElement('th');
    const cellRain = document.createElement('td');
    const cellBtn= document.createElement('td');
    const inFecha= document.createElement('input');
    inFecha.type = 'datetime-local';
    const now= new Date().toISOString().split('Z')[0];
    //date with minutes only
    inFecha.value = now.slice(0, 16);
    inFecha.required = true;
    const inRain = document.createElement('input');
    inRain.type = 'number';
    inRain.value = '0.0';
    inRain.step = '0.1';
    inRain.min = '0';
    inRain.classList.add( 'inrain');
    inFecha.required = true;

    const inBtn = document.createElement('input');
    inBtn.type = 'button';
    inBtn.value = 'Registrar';
    inBtn.addEventListener('click', function(){
        localStorage.setItem( inFecha.value, inRain.value );
        location.reload();

    });
    cellDate.appendChild(inFecha);
    cellRain.appendChild(inRain);
    cellBtn.appendChild(inBtn);
    row.appendChild(cellDate);
    row.appendChild(cellRain);
    row.appendChild(cellBtn);
    tab.appendChild(row);

}
const tab = document.getElementById("tab");

keys = Object.keys(localStorage).sort();
keys.pop('elementor');
for (const k of keys) {
    addRow(tab, k, localStorage.getItem(k),'Eliminar');
}

addRowInput(tab);

