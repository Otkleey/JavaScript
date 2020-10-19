// ES5
var datos = ["Pablo", 25];

//var nombre = datos[0];
//var edad = datos[1];

// ES6

var [nombre, edad] = ["Pablo", 25];
console.log(nombre);
console.log(edad);

const persona = {
  Nombre: "Carlos",
  Edad:30
};
const {Nombre, Edad} = persona;
console.log(Nombre);
console.log(Edad);

const {Nombre: n, Edad: e} = persona;
console.log(n);
console.log(e);

// Destructuracion con funciones flecha

const calcMayoriaEdad = (year) => {
  const edad = new Date().getFullYear() - year;
  const mayoria = edad >= 18 ? true : false;
  return [edad, mayoria];
}
const [edad2, mayoria] = calcMayoriaEdad(1993);
console.log(edad2);
console.log(`Es mayor de edad: ${mayoria}`);
