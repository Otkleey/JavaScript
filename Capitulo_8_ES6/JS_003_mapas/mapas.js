const datos = new Map();

// con set asignamos los valores que entraran a map
datos.set('nombre', 'Grover');
datos.set('edad',30);
datos.set(1,'grover@email.com');
datos.set(2,'grover@gmail.com');
datos.set('movil',9999999999);

// para leer utilizo la palabra get

console.log(datos.get('nombre'));
console.log(datos.get(2));
console.log(datos.size);

//datos.delete(2); borrar un elemento en especifico utilizando la llave
//datos.clear(); limpiar el mapa

// Recorremos el mapa imprimiendo su valor y su llave.
datos.forEach((value,key) => {
  console.log(`${key} : ${value}`)
});
