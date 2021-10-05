function validation (dat, descripcion, mont) {
    if (dat == "") {
        return alert('Dato erroneo');
    }
    if (descripcion == "") {
        return alert('Campo: Descripción, vacio');
    }
    if (mont == "") {
        return alert('Campo: Monto, vacio');
    }
}

export default validation;