var suma = function (a, b ,c ,d){
  return a + b + c + d;
}

var ope1 = suma(10,20,30,40);
console.log(ope1);

/////////////////////////////////////
var valores = [10,20,30,40];
const ope2 = suma(...valores);

console.log(ope2);

////////////////////////////////////

const rrhh = ['Pedro', 'Pablo', 'Ana'];
const contabilidad = ['Felipe','Carlos','Maria'];

const empresa = [...rrhh, ...contabilidad];
console.log(empresa);
