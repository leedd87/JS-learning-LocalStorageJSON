//Storage
//ingresando reserva

function ingresarReserva() {
    let reserva;
    let cantidad;

    let ingresarReserva = true;

    do {
        reserva = prompt('que hotel? vacio para salir:');
        if (item == '') {
            break;
        }
        cantidad = prompt('cuantas personas son?')
        if (cantidad && cantidad > 0) { //si ingreso algo (cantidad) Y ese ingreso es mayor a 0 (cantidad > 0)
            localStorage.setItem(reserva, cantidad); //guardarlo en localStorage
        }

    } while (ingresarReserva)

}