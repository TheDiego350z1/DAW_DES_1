import meses from "./asset/meses.js";
import transaction from "./asset/transaction.js";
import ingresos_mostrar from "./asset/ingresos_mostrar.js";
import egresos_mostrar from "./asset/egresos_mostrar.js";
import limpiar_campos from "./asset/limpiar_campos.js";
import sum_ingresos from "./asset/sum_ingresos.js";
import transacciones from "./asset/transacciones.js";
import sum_egresos from "./asset/sum_egresos.js";
import get_porcentaje from "./asset/get_porcentaje.js";

let showDate = document.getElementById('fecha');
let date = new Date;  //Función para obtener la fecha
let ingresos = document.getElementById('ingresos');
let egresos = document.getElementById('egresos');
let porcentaje = document.getElementById('porcentaje');
let balance = document.getElementById('balance');

const add = document.getElementById('add'); //boton para agregar transacciones

if (ingresos.value == undefined) {
    ingresos.innerHTML = `$0.00`;
};
if (balance.value == undefined) {
    balance.innerHTML = `$0.00`;
}
if (egresos.value == undefined) {
    egresos.innerHTML = `$0.00`;
};
if (porcentaje.value == undefined) {
    porcentaje.innerHTML = `0%`;
};

//Mostrar el total de ingresos 
add.onclick = function () {
    transaction();
    limpiar_campos();
    let sum_ingre = sum_ingresos(transacciones);
    ingresos.innerHTML = `$ ${sum_ingre}`;
    let sum_egre = sum_egresos(transacciones);
    egresos.innerHTML = `$ ${sum_egre}`;
    let getPorcentaje = get_porcentaje(sum_ingre, sum_egre);
    porcentaje.innerHTML = `${getPorcentaje}%`;
    let resta = sum_ingre - sum_egre;
    balance.innerHTML = `$ ${resta}`;
    console.log(JSON.stringify(transacciones));
};

//Mostramos la el mes y el año
showDate.innerHTML = `Mes de ${meses[date.getMonth()]} del ${date.getUTCFullYear()}`;


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
};

//Mostrar egresos
egreso.onclick = function () {
    mostrar_ingresos.hidden = true; //Ocultamos la sección de ingresos
    mostrar_egresos.hidden = false; //Mostramos la sección de egresos
    egresos_mostrar();
}