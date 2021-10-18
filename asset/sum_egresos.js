function sum_egresos(transacciones) {
    return transacciones.filter(n => n.tipo == '2')
        .map(n => Number(n.monto))
        .reduce((a, b) => a + b, 0);
};

export default sum_egresos;