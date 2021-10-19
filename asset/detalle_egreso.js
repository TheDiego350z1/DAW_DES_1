function detalle_egreso (montoIngreso, totalIngresos) {
    /* Con esta función calculamos el porcentaje de egreso */
    return ((montoIngreso * 100) / totalIngresos).toFixed(2);
};

export default detalle_egreso;