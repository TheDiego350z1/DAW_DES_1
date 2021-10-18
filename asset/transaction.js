import validation from "./validation.js";
import transacciones from "./transacciones.js";

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
    console.log(transacciones);
};

function agregarTransacciones (nuevaTransaccion) {
    transacciones.push(nuevaTransaccion);
};

export default transaction;