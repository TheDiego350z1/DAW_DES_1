import egresos from "./egresos.js";

function egresos_mostrar () {
    let mostrar_egresos  = document.getElementById('table_mostrar_egresos');

    egresos.forEach(ingreso => {
        mostrar_egresos.innerHTML += `<tbody><tr><th>${ingreso.descrip} </th> <td>${ingreso.monto} </td></tr></tbody>`;
    })
};

export default egresos_mostrar;