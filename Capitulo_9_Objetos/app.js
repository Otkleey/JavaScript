// Se declara el objeto miLibro, siempre van en pares las propiedades
// let miLibroA = {
//     titulo: 'El libro de JavaScript',
//     autor: 'Grover Pablo Vasquez',
//     paginas: 400,
//     publicado: false
// }
//
// let miLibroB = {
//     titulo: 'Programacion en PHP',
//     autor: 'Pablo Vasquez',
//     paginas: 700,
//     publicado: true
// }

// Acceder a datos
// console.log(miLibroA);
// console.log(miLibroA.titulo);
// console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);
//
// // Modificar datos
// miLibroA.paginas=500;
// console.log(miLibroA.paginas);

////////////////////////////////EJERCICIO BASICO////////////////////////////////

//let persona = {
//  nombre: 'Sergio Montiel Castello',
//  edad: 28,
//  ciudad: 'Tampico'
//}

//persona.edad = 27;

//console.log(`${persona.nombre} tiene ${persona.edad} y vive en la ciudad de ${persona.ciudad}`);

////////////////////////////////FUNCIONES///////////////////////////////////////

// let getResumen = (libro)=> {
//     return{
//       resumen: `${libro.titulo} creado por ${libro.autor}`,
//       resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
//     }
// }
//
// let libroAResumen = getResumen(miLibroA);
// let libroBResumen = getResumen(miLibroB);
//
// console.log(libroAResumen.resumen);
// console.log(libroBResumen.resumenPaginas);

/////////////////////////////REFERENCIA DE OBJETOS//////////////////////////////

// let persona = {
//   nombre: 'Pablo',
//   edad: 30,
//   sueldo: 1200
// }
//
// let otraPersona = persona;
// otraPersona.sueldo = 1500;
// console.log(otraPersona);
//
// let cambiarSueldo = (person, monto) => {
//   person.sueldo = person.sueldo + monto;
//   //console.log(person);
// }
//
// cambiarSueldo(persona, 500);
// console.log(persona);
// console.log(otraPersona);


////////////////////////////////METODOS/////////////////////////////////////////

// let persona = {
//   nombre: 'Pablo',
//   edad: 30,
//   sueldo: 1200,
//   metodoPrueba: function(){
//     //console.log('Escribiendo desde el metodo Prueba');
//   return 'Resultado desde prueba';
//   }
// }
//
// let result = persona.metodoPrueba();
// console.log(result);

////////////////////////////////////////////////////////////////////////////////
