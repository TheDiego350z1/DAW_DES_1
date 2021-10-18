import transacciones from "./transacciones.js";

function ingresos_mostrar () {
    let mostrar_ingresos = document.getElementById('table_mostrar_ingresos'); //Captura el elemento html

    if (transacciones.length == 0 ) {
        return alert('No hay transacciones que mostrar'); //Comprueba si hay transacciones
    }; 
    mostrar_ingresos.innerHTML = ``; //Limpia el contenido html

    let mostrar_ingresos_transaccion = [];//Variable para almacenar las transacciones
    
    //Recorremos el array con todas las transacciones almacenadas
    transacciones.forEach(transaccion => {
        if(transaccion.tipo == '1'){
            mostrar_ingresos_transaccion.push(transaccion);
        };
    });
    //Muestro los lementos en html
    mostrar_ingresos_transaccion.forEach(get => {
        mostrar_ingresos.innerHTML += `<tbody><tr><th scope="row">${get.descrip} </th> <td>${get.monto} </td></tr></tbody>`;
    });
};

export default ingresos_mostrar;