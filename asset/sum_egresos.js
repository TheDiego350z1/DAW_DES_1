function sum_egresos(transacciones) {
    return transacciones.filter(n => n.tipo == '2') //filtramos las transacciones que sean del tipo '2', egresos
        .map(n => Number(n.monto)) //Buscamos en el array el campo monto de las 
        .reduce((a, b) => a + b, 0);
};

export default sum_egresos;