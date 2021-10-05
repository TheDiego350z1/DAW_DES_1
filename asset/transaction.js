import validation from "./validation.js";

function transaction () {

    function Transacciones (tipo, descrip, monto) {
        this.tipo = tipo;
        this.descrip = descrip;
        this.monto = monto;
    }

    let dat = document.getElementById('options').value; //captura el valor del capo de opciones (ingreso o egreso)

    let descripcion = document.getElementById('descrip').value; //captura el valor del campo de descripción

    let mont = document.getElementById('monto').value; //captura el valor del monto

    validation(dat, descripcion, mont); //Validamos si los campos tiene texto o no

    let nuevaTransaccion = new Transacciones (dat, descripcion, mont); //Creamos un nuevo objeto con los datos 
    agregarTransacciones(nuevaTransaccion);
}
var baseDatos = [];
var ingresos = [];
var egresos = [];

function agregarTransacciones (nuevaTransaccion) {
    /* Definimso el tipo de transacción
        1 = ingresos
        2 = egresos
     */
    if(nuevaTransaccion.tipo == '1') {
        ingresos.push(nuevaTransaccion);
    } else if (nuevaTransaccion.tipo == '2') {
        egresos.push(nuevaTransaccion);
    } else {
        console.warn(`Datos erroneos`);
        return;
    }

    const mostrar_ingresos = document.getElementById('table_mostrar_ingresos');
    const mostrar_egresos = document.getElementById('mostrar_egresos');

    // mostrar_ingresos.innerHTML += `
    // <tbody><tr><th>${nuevaTransaccion.descrip} </th> <td>${nuevaTransaccion.monto} </td></tr></tbody>`;

    ingresos.forEach(transaccci => {
        mostrar_ingresos.innerHTML += `<tbody><tr><th>${transaccci.descrip} </th> <td>${transaccci.monto} </td></tr></tbody>`
    })
}

export default transaction;