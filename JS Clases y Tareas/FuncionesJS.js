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

// .forEach
const numeros = [1, 5, 10, 30, 50];
//const replica = [];
let replica = 0;

numeros.forEach((item)=>{
    //replica.push(item);
    replica += item;
})

console.log(replica);

// Uso de .map

const doble = numeros.map((valor) => valor * 2)
/* numeros.forEach((item)=>{
    doble.push(item*2)
}) */

console.log(doble)

// VECTOR DE OBJETOS

const estudiantes = [
    {nombre: 'Pedro', apellido: 'Perez'},
    {nombre: 'Pablo', apellido: 'Moncada'},
    {nombre: 'Andres', apellido: 'Montoya'}
];

const nombreCompleto = estudiantes.map((student) =>{
    return `${student.nombre} ${student.apellido}`  
})

console.log(estudiantes);
console.log(nombreCompleto);

// .filter. Filtrado con condicion

const numerosFiltrados = numeros.filter((numero) => numero<30);

console.log(numerosFiltrados);

const nombreFiltrado = estudiantes.filter((student) => student.nombre==='Pablo'); 

console.log(nombreFiltrado);

// item => item*2    es igual a    item =>{return item*2}

// .every    Compara cada objeto dentro del arreglo dando de resultado valor True o False

const frutas = ['Banano', 'Papaya', 'Mango', 'Fresa'];

const cumple = frutas.every((jugo) => jugo.length > 3);

console.log(cumple);

const objetoFrutas = [
    {nombre: 'Banano', bueno: true},
    {nombre: 'Papaya', bueno: false},
    {nombre: 'Mango', bueno: true},
    {nombre: 'Fresa', bueno: true},
]

const buenEstado = objetoFrutas.every((bueno) => bueno.bueno === true);   // triple = (===) es igual tipo de dato e igual valor, doble = (==) es igual tipo de dato y un solo = es de asginacion (x=0)

console.log(buenEstado);

// OBJETOS y objetos dentro de objetos

const auto = {
    color: 'azul',
    año: 1982,
    puertas: 4,
    marca: 'Mazda',
    revisiones:{
        fechaIngreso: '10-enero-2020',
        fechaSalida: '20-enero-2020',
        estadoSalida: 'Bueno',
        entregadoPor: 'Juan Perez'
    },
    seguro: true,
    registrado: true
};

let autos = [];
autos.push(auto);

console.log(autos);
