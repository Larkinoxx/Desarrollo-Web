let datosPersonales = ['Luis', '21/09/2002', 31];

console.log(datosPersonales);

const correccionEdad = edad =>{
  datosPersonales.pop();
  return datosPersonales.push(edad);
}

correccionEdad(21);

console.log(datosPersonales);

const añoNacimiento = (edad, año) => año-edad;

const comprobacionDatos = (edad, año, funcion1, funcion2) =>{
  let correcion = funcion1(edad);
  let nacimiento = funcion2(edad,año);
  console.log(datosPersonales);
  console.log(nacimiento);
  return nacimiento;
}

console.log(comprobacionDatos(41, 2023, correccionEdad,añoNacimiento));