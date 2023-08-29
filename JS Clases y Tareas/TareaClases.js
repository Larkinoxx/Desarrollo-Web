/* Crear una clase padre
*  Crear una clase que herede de la clase padre
*  Ambas clases deben tener minimo 2 metodos
*  Deben recibir objetos
*  Los objetos recibidos deben tener otro objeto como propiedad
*  Mostrar resultados */

inscrito = false    // variable boolean que puede variar
const materia = {       // inicializacion de objeto materia ubicada dentro del objeto infoUni
    semestre: 0,
    nombreMateria: '',
    grupo: 0,
    hora: '',
    profesor: ''
}

class universidad {             // clase padre
    constructor (infoUni){
        this.ubicacion = infoUni.ubicacion;
        this.carrera = infoUni.carrera;
        this.tipoCarrera = infoUni.tipoCarrera;
        this.materia = infoUni.materia
    }

    inscribir(){
        inscrito = true
        return `Usted se ha inscrito a la carrera "${this.carrera}"`
    }

    estado(){
        return `Usted esta inscrito a la universidad: ${inscrito}`
    }

    anular(){
        inscrito = false
        return `Usted se ha retirado de la carrera "${this.carrera}"`
    }
}

class estudiante extends universidad{    // clase heredera
    constructor (infoUni){

        super (infoUni)
    }

    infoMateria(){
        return (console.log(`Toda la informacion de la materia: ${JSON.stringify(materia)}`))    // JSON.stringify() para solucionar error [objeto objeto] y muestre los datos del objeto correctamente
    }
    
    cancelarMateria(){
        return `La materia de caracteristicas "${JSON.stringify(materia)}" fue cancelada correctamente`
    }
}

const infoUni = {         // modificacion de objeto infoUni con su modificacion a su objeto interior materia
    ubicacion: 'Medellin',
    carrera: 'Desarrollo de Software',
    tipoCarrera: 'Tecnologia',
    materia: {...materia}
}
infoUni.materia.grupo = 350
infoUni.materia.hora = '10-12'
infoUni.materia.nombreMateria = 'Desarrollo Web'
infoUni.materia.profesor = 'Nelson'
infoUni.materia.semestre = 6

const juanitoAlimaña = new estudiante(infoUni, materia)      

// Muestra de resultados
console.log(juanitoAlimaña.inscribir())
console.log(juanitoAlimaña.estado())
console.log(juanitoAlimaña.anular())
console.log(juanitoAlimaña.estado())

console.log(juanitoAlimaña.inscribir())
console.log(juanitoAlimaña.estado())

juanitoAlimaña.infoMateria()

console.log(juanitoAlimaña.cancelarMateria());