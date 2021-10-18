function get_porcentaje (total_ingresos, total_egresos) {
    /*
        Calculamos el porcentaje en base a la siguiente formula
                    Total egreos * 100
        %Egresos = ______________________
                    Total ingresos
    */
    return ((total_egresos * 100) / total_ingresos).toFixed(2);
    
};

export default get_porcentaje;