function get_porcentaje (total_ingresos, total_egresos) {
    return ((total_egresos * 100) / total_ingresos).toFixed(2);
}

export default get_porcentaje;