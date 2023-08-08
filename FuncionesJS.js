// FUNCIONES
function restar(n1, n2){
    return n2-n1;
}

// Funciones anonimas
const sumarDosNumeros = function(n1, n2){
    return n1+n2;
}

console.log(sumarDosNumeros(4, 7));

const mult = (n1, n2)  =>{
    return n1*n2;
}

console.log(mult(8, 6))

const mult2 = () =>{   // Funciones que no reciben parametros
    return 1*0;
}

const mult3 = n1 =>{   // Funciones que solo reciben un parametro
    return n1*10;
}

const mult4 = (n1, n2) => n1*n2;   // Funciones que ahorran codigo, no incluye return

// Callback Function 

const operacionesVarias = (n1, n2, operacion) =>{
    return operacion(n1, n2);
}

console.log(operacionesVarias(2, 5, mult4))

// ARREGLOS

let userData = ['Juan', 1234, '@gmail.com'];    //CORCHETES

const userData2 =[{name: 'Juan', pass: 1234, mail:'@gmail.com'}];

/* Propiedades de los arreglos
 * length.    Longitud (cantidad de datos)
 * index.     Posicion en el arreglo
 * push.      Ingresar un dato al final del arreglo
 * pop.       Sacar el ultimo dato
 */

userData.pop();
userData.push('outlook.com');

console.log(userData[0]);   // Muestra la posicion 0 del arreglo. Si se quita [] mostrara todo el arreglo
