//Storage
//ingresando reserva

function ingresarReserva() {
    let reserva;
    let cantidad;
    let cantidadReservas = 0;

    let ingresarReserva = true;

    do {
        reserva = prompt('que hotel? vacio para salir:');
        if (reserva == '') {
            break;
        }
        cantidad = prompt('cuantas personas son?')
        if (cantidad && cantidad > 0) { //si ingreso algo (cantidad) Y ese ingreso es mayor a 0 (cantidad > 0)
            localStorage.setItem(reserva.toUpperCase(), cantidad); //guardarlo en localStorage y todo los datos en MAYUSCULA
            cantidadReservas++;
        } else {
            ingresarReserva = false
        }

    } while (ingresarReserva)

    sessionStorage.setItem('cantidadReservas', cantidadReservas);
}

ingresarReserva();

console.log(sessionStorage.getItem('cantidadReservas'));

let cantidadReservas = localStorage.getItem('punta cana'.toUpperCase());

console.log(` Cantidad de Reservas en Punta Cana es ${cantidadReservas}`);