import detalle_egreso from "./detalle_egreso.js";
import sum_ingresos from "./sum_ingresos.js";
import transacciones from "./transacciones.js";

function egresos_mostrar () {
    let mostrar_egresos  = document.getElementById('table_mostrar_egresos'); //Captura el id del elemento html
    mostrar_egresos.innerHTML = ` `; //Limpia la sección de mostrar egresos para que no se repitan

    if (transacciones.length == 0 ) {
        return alert('No hay transacciones que mostrar'); //Comprueba si hay transacciones
    }; 

    let mostrar_egresos_transaccion = []; //Variable que almacena los datos de las transacciones de tipo egreso

    //Recorreos las transacciones generales para almacenar las transacciones de tipo ingreso
    transacciones.forEach(transaccion => {
        if (transaccion.tipo == '2') {
            mostrar_egresos_transaccion.push(transaccion);
        }
    });
    //Imprime en HTMl los egresos
    mostrar_egresos_transaccion.forEach(get => {
        let porcentaje_egresos = detalle_egreso(get.monto,sum_ingresos(transacciones) );
        mostrar_egresos.innerHTML += `<tbody><tr><th scope="row"> ${get.descrip} </th><td>$ ${get.monto}</td></tr> </th><td>${porcentaje_egresos} %</td></tr> </tbody>`;
    });
};

export default egresos_mostrar;