function sum_ingresos(transacciones) {
    return transacciones.filter(n => n.tipo == '1') //filtramos las transacciones que sean del tipo '1', ingresos
        .map(n => Number(n.monto)) //Buscamos en el array el campo monto de las 
        .reduce((a, b) => a + b, 0);
};

export default sum_ingresos;