import ingresos from "./ingreso.js";

function ingresos_mostrar () {
    let mostrar_ingresos = document.getElementById('table_mostrar_ingresos');

    ingresos.forEach(ingreso => {
        mostrar_ingresos.innerHTML += `<tbody><tr><th scope="row">${ingreso.descrip} </th> <td>${ingreso.monto} </td></tr></tbody>`;
    })
};

export default ingresos_mostrar;