function sum_ingresos(transacciones) {
    return transacciones.filter(n => n.tipo == '1')
        .map(n => Number(n.monto))
        .reduce((a, b) => a + b, 0);
}

export default sum_ingresos;