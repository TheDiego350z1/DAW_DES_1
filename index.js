import meses from "./asset/meses.js";
import transaction from "./asset/transaction.js";
import ingresos_mostrar from "./asset/ingresos_mostrar.js";
import egresos_mostrar from "./asset/egresos_mostrar.js";

let showDate = document.getElementById('fecha');
let date = new Date;  //Función para obtener la fecha

const add = document.getElementById('add'); //boton para agregar transacciones


//Mostramos la el mes y el año
showDate.innerHTML = `Mes de ${meses[date.getMonth()]} del ${date.getUTCFullYear()}`;

add.onclick = function () {
    transaction();
};

//Mostrar sección de datos

const ingreso = document.getElementById('ingreso'); //Capturar el boton de ingresos
const mostrar_ingresos = document.getElementById('mostrar_ingresos'); //Captura el contenedos para mostrar ingresos
const egreso = document.getElementById('egreso');
const mostrar_egresos = document.getElementById('mostrar_egresos');

//Mostrar ingresos
ingreso.onclick = function () {
    mostrar_ingresos.hidden = false;
    mostrar_egresos.hidden = true;
    ingresos_mostrar();
    console.log('ingresos');
};
//mostrar egresos

egreso.onclick = function () {
    mostrar_ingresos.hidden = true;
    mostrar_egresos.hidden = false;
    egresos_mostrar();
    console.log('egresos');
}