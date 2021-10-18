import transacciones from "./transacciones.js";

function egresos_mostrar () {
    let mostrar_egresos  = document.getElementById('table_mostrar_egresos');
    /*
        Limpia la sección de mostrar egresos para que no se repitan
    */
    mostrar_egresos.innerHTML = ` `;

    let mostrar_egresos_transaccion = []; //Variable que almacena los datos de las transacciones de tipo egreso

    //Recorreos las transacciones generales para almacenar las transacciones de tipo ingreso
    transacciones.forEach(transaccion => {
        if (transaccion.tipo == '2') {
            mostrar_egresos_transaccion.push(transaccion);
        }
    });

    mostrar_egresos_transaccion.forEach(get => {
        mostrar_egresos.innerHTML += `<tbody><tr><th scope="row"> ${get.descrip} </th><td> ${get.monto}</td></tr></tbody>`;
    });
};

export default egresos_mostrar;