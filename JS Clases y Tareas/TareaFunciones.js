let datosPersonales = ['Luis', '21/09/2002', 31];

console.log("Datos base: ", datosPersonales);

const correccionEdad = edad =>{
  datosPersonales.pop();
  return datosPersonales.push(edad);
}

correccionEdad(21);

console.log("Datos actualizados: ", datosPersonales);

const añoNacimiento = (edad, año) => año-edad;

console.log("Año nacimiento: ", añoNacimiento(21, 2023));

const comprobacionDatos = (edad, año, funcion1, funcion2) =>{
  let correccion = funcion1(edad);
  let nacimiento = funcion2(edad,año);
  console.log("Datos actualizados durante una funcion callback: ", datosPersonales);
  console.log("Año de nacimiento durante una funcion callback: ", nacimiento);
  return nacimiento;
}

console.log("Llamado a 2 funciones a traves de un callback: ", comprobacionDatos(41, 2023, correccionEdad, añoNacimiento), datosPersonales);