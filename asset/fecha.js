let fecha = document.getElementById("fecha");
let hoy = new Date();


fecha.innerHTML = `Presupuesto de ${meses[mesActual]}`;

function fecha () {
    let mesActual = hoy.getMonth();
    console.log(meses[mesActual])
};

export default mes; 