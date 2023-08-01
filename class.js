let player = 'Juan Casas';
player = 2023;

var playerDos = 'Otro Gato';

//Imprime el valor de playerDos
console.log(playerDos.length);

//creacion de variales
//el comando let permite crear variables de cualquier tipo, sea int, string, etc
let a;
a = 3.1415

//Boolean constante, es decir, const no permite cambiar el valor interno de su variable
const found = false;

//no recomendable usar debido a su vejez, mejor usar let
var age = 3;

/* Comentario
multi
linea */

let n = 0

n += 23448

//console.log() imprime en consola
console.log(n);

let result;

result = `el player dos de nombre ${playerDos} con edad ${age} y numero de prueba ${n}`

console.log(result);


//CONDICIONALES
// Se usa || para condicional OR

//Operador ternario. ?
/*Se usa despues de establecer una condicion, de forma que de ser verdadera hara una accion
u otra si la condicion no es cumplida. Solo puede realizar 2 acciones distintas. Bianrio */

/*Ejemplo de Operador ternario. Siendo un cliente registrado frecuente o no, se aplica un
descuento o de no estar registrado, el precio aumenta, en ambos casos un 15% al original */
let precio = 500
let clienteRegFrec = 'si'

clienteRegFrec === 'si' ? precio = precio-(precio*15/100) : precio = precio+(precio*15/100)

console.log(precio);

//If Else
//Ejemplo If Else
n = Math.floor(Math.random()*11) //generacion de un numero aleatorio desde 0 a 10
if (n>=0 && n<=4){ //de paso, use el operador && que al contrario de || (or), significa (and) y opperadores de comparacion como <= o >=
    console.log('El numero aleatorio es menor que 5, por tanto no aprobaste.');
} else {
    console.log('El numero aleatorio es mayor que 5, por tanto aprobaste.');
}

console.log(n)

//Switch
//Ejemplo Switch
n = Math.floor(Math.random()*8 + 1) //creacion de numero aleatorio desde 0 a 7, con probabilidad de que al sumar 1, de resultado 8 para mostrar mensaje de error
console.log(n); //verificacion del numero generado
switch (n) {
    case 1:
        console.log('El dia aleatorio generado fue Lunes');
        break;
    case 2:
        console.log('El dia aleatorio generado fue Martes');
        break;
    case 3:
        console.log('El dia aleatorio generado fue Miercoles');
        break;
    case 4:
        console.log('El dia aleatorio generado fue Jueves');
        break;
    case 5:
        console.log('El dia aleatorio generado fue Viernes');
        break;
    case 6:
        console.log('El dia aleatorio generado fue Sabado');
        break;
    case 7:
        console.log('El dia aleatorio generado fue Domingo');
        break;
    default:
        console.log('Si por algun motivo estas viendo este mensaje, por favor comuniquese con el desarrollador del test.');
}

//Operador logico !
//Su funcion es invertir un valor de un booleano.
let aprobar = true
let desaprobar = !aprobar

console.log(`Si el estudiante aprueba, saldra en consola el valor "${aprobar}". De lo contrario, saldra "${desaprobar}"`);
console.log('El estudiante aprueba:');
n = Math.floor(Math.random()*2)
if (n == 0) {
    console.log(aprobar);
} else {
    console.log(desaprobar);
}

/*existen algunos operadores de comparacion mas como < (menor que),
 > (mayor que) <= >= (menor/mayor o igual que), === (igual estricto), !== (igual no estricto)*/


 //Else If
 //Funciona exactamente igual al If Else, solo que agregando otro condicional If a nuestro Else
 n = Math.floor(Math.random()*3)
 if (n == 0) {
    console.log(`El numero aleatorio es 0`);
 } else if (n == 1) {
    console.log(`El numero aleatorio es 1`);
 } else {
    console.log(`El numero aleatorio es 2`);
 }