let desciption = document.getElementById('descrip');
let monto = document.getElementById('monto');

//Función creada para limpiar los campos de ingreso de datos: descripción y monto
function limpiar_campos () {
    desciption.value = '';
    monto.value = '';
}

export default limpiar_campos;