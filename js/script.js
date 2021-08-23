//Storage
//ingresando reserva

// function ingresarReserva() {
//     let reserva;
//     let cantidad;
//     let cantidadReservas = 0;

//     let ingresarReserva = true;

//     do {
//         reserva = prompt('que hotel? vacio para salir:');
//         if (reserva == '') {
//             break;
//         }
//         cantidad = prompt('cuantas personas son?')
//         if (cantidad && cantidad > 0) { //si ingreso algo (cantidad) Y ese ingreso es mayor a 0 (cantidad > 0)
//             localStorage.setItem(reserva.toUpperCase(), cantidad); //guardarlo en localStorage y todo los datos en MAYUSCULA
//             cantidadReservas++;
//         } else {
//             ingresarReserva = false
//         }

//     } while (ingresarReserva)

//     sessionStorage.setItem('cantidadReservas', cantidadReservas);
// }

// ingresarReserva();

// console.log(sessionStorage.getItem('cantidadReservas'));

// let cantidadReservas = localStorage.getItem('punta cana'.toUpperCase());

// console.log(` Cantidad de Reservas en Punta Cana es ${cantidadReservas}`);

// function ingresarProductos(){
//     let item;
//     let cantidad;

//     let ingresarProductos = true;

// do {
//     item = prompt('que item?')
//     if (item == ''){
//         break;
//     }

// } while (ingresarProductos);

// }

// let item1 = {
//     nombre: 'PAN',
//     cantidad: 6
// }

// console.log(item1.nombre + ' : ' + item1.cantidad);
// console.log(item1);

let listaItems = [
    { nombre: 'arroz'.toUpperCase(), cantidad: 22 },
    { nombre: 'pez'.toUpperCase(), cantidad: 10 },
    { nombre: 'zapallo'.toUpperCase(), cantidad: 5 }

];

for (const producto of listaItems) {
    localStorage.setItem(producto.nombre, JSON.stringify(producto))
}