import meses from "./asset/meses.js";
import transaction from "./asset/transaction.js";
import ingresos_mostrar from "./asset/ingresos_mostrar.js";
import egresos_mostrar from "./asset/egresos_mostrar.js";
import total_ingresos from  "./asset/total_ingresos.js"
import limpiar_campos from "./asset/limpiar_campos.js";
import sum_ingresos from "./asset/sum_ingresos.js";
import transacciones from "./asset/transacciones.js";
import sum_egresos from "./sum_egresos.js";

let showDate = document.getElementById('fecha');
let date = new Date;  //Función para obtener la fecha
let ingresos = document.getElementById('ingresos');
let egresos = document.getElementById('egresos');

const add = document.getElementById('add'); //boton para agregar transacciones

if (ingresos.value == undefined) {
    ingresos.innerHTML = ` $0.00`
};
if (egresos.value == undefined) {
    egresos.innerHTML= " $0.00";
};

//Mostrar el total de ingresos 
add.onclick = function () {
    transaction();
    limpiar_campos();
    let sum_ingre = sum_ingresos(transacciones);
    ingresos.innerHTML = `$ ${sum_ingre}`;
    let sum_egre = sum_egresos(transacciones);
    egresos.innerHTML = `$ ${sum_egre}`;
};





console.log("Total ingesos" + total_ingresos);
console.log("El vador de ingresos es:" + ingresos);

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

//mostrar egresos

egreso.onclick = function () {
    mostrar_ingresos.hidden = true;
    mostrar_egresos.hidden = false;
    egresos_mostrar();
}