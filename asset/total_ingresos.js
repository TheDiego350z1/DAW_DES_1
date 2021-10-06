import ingresos from "./ingreso.js";

let total_ingresos = 0;

total_ingresos = ingresos.forEach(sum => { 
    total_ingresos += sum.monto;
});

export default total_ingresos;