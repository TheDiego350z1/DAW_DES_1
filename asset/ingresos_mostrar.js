import transacciones from "./transacciones.js";

function ingresos_mostrar () {
    let mostrar_ingresos = document.getElementById('table_mostrar_ingresos');

    if (transacciones.length == 0 ) {
        return alert('No hay transacciones que mostrar');
    }

    mostrar_ingresos.innerHTML = ``;

    let mostrar_ingresos_transaccion = []; //Variable para almacenar las transacciones
    
    //Recorremos el array con todas las transacciones almacenadas
    transacciones.forEach(transaccion => {
        if(transaccion.tipo == '1'){
            mostrar_ingresos_transaccion.push(transaccion);
        };
    });

    mostrar_ingresos_transaccion.forEach(get => {
        mostrar_ingresos.innerHTML += `<tbody><tr><th scope="row">${get.descrip} </th> <td>${get.monto} </td></tr></tbody>`;
    });

};

export default ingresos_mostrar;