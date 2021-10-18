function detalle_egreso (montoIngreso, totalIngresos) {
    return ((montoIngreso * 100) / totalIngresos).toFixed(2);
};

export default detalle_egreso;