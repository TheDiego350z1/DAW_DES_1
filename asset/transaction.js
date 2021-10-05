import validation from "./validation.js";
import ingresos from "./ingreso.js";
import egresos from "./egresos.js";

function transaction () {

    function Transacciones (tipo, descrip, monto) {
        this.tipo = tipo;
        this.descrip = descrip;
        this.monto = monto;
    };

    let dat = document.getElementById('options').value; //captura el valor del capo de opciones (ingreso o egreso)

    let descripcion = document.getElementById('descrip').value; //captura el valor del campo de descripción

    let mont = document.getElementById('monto').value; //captura el valor del monto

    validation(dat, descripcion, mont); //Validamos si los campos tiene texto o no

    let nuevaTransaccion = new Transacciones (dat, descripcion, mont); //Creamos un nuevo objeto con los datos 
    agregarTransacciones(nuevaTransaccion);
};

function agregarTransacciones (nuevaTransaccion) {
    /* Definimso el tipo de transacción
        1 = ingresos
        2 = egresos
     */
    if(nuevaTransaccion.tipo == '1') {
        ingresos.push(nuevaTransaccion);
        console.log(ingresos);
    } else if (nuevaTransaccion.tipo == '2') {
        egresos.push(nuevaTransaccion);
    } else {
        console.warn(`Datos erroneos`);
        return;
    }
};

export default transaction;