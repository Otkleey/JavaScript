//Aqui creamos una nueva fecha con la fecha actual usando el metodo new Date(), despues obtenemos el puro año con el mismo metodo pero agregandole .getFullYear() e imprimimos.
let fecha = new Date();
let año = new Date().getFullYear();

console.log(fecha);
console.log(año);

//Realizaremos dos ejemplos con funciones flecha.
//        ES5
function cuadrado(num){
  return num * num;
}

console.log(cuadrado(5));

//        ES6
const cuadrado2 = (num1) => num1 * num1;

console.log(cuadrado(6));

// Cuando en la funcion se agregara un bloque mas largo se ocupan las {}

const cuadrado3 = (num2) => {
  return num2 * num2;
}

console.log(cuadrado3(7));

// Creamos un arreglo y trabajamos con objetos JSON.

const personas = [
    {
      nombre:"Pablo",
      edad:20
    },
    {
      nombre:"Ana",
      edad:25
    },
    {
      nombre:"Carlos",
      edad:30
    },
    {
      nombre:"Pepe",
      edad:35
    }
];
//const menores30 = personas.filter(function(persona){
//  return persona.edad < 30;
//});

const menores30 = personas.filter((persona) => persona.edad < 30);

console.log(menores30);
