/* Construir Array con minimo 2 objetos.
*  Cada objeto debe tener adentro otro objeto
*  Usar minimo 3 metodos de arreglos sobre el array */

const vivienda = [{
    color: 'amarillo',
    ciudad: 'Medellin',
    pisos: 2,
    dueño: {
        ocupacion: 'jefe de planta',
        edad: 45,
        sexo: 'Masculino'
    }
}]

const celular = [{
    marca: 'Samsung',
    precio: 350,
    tiempoUso: '2 años',
    specs: {
        modelo: 'Galaxy s9',
        color: 'Azul',
        RAM: 4,
        almacenamiento: 64,
        flashFrontal: false
    },
    unicoDueño: false
}]

// .forEach
const BDGobierno = []

vivienda.forEach((item)=>{
    BDGobierno.push(item)
})

console.log("La siguiente vivienda fue agregada correctamente a la base de datos.");
console.log(BDGobierno);

// .filter
const aplica = vivienda.filter((ubicacion) => ubicacion.ciudad === 'Medellin')

console.log("La siguiente casa aplica a matricula 0 debido a su ubicacion en la ciudad de Medellin");
console.log(aplica);

// .every
const unDueño = celular.every((dueño) => dueño.unicoDueño === true) 

console.log(`El celular cuenta con un unico dueño: ${unDueño}`);
