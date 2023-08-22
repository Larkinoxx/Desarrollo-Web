// Clase padre
class Animal {
    constructor(especie, color, sonido, habitat){
        this.especie = especie;
        this.color = color;
        this.sonido = sonido;
        this.habitat = habitat;
    }

    moverse(tipoMovimiento){
        console.log(`*realizar: ${tipoMovimiento}*`);
    }

    determinarEspecie(){
        return this.especie;
    }

    sonidoCaracteristico(){
        return this.sonido;
    }

    ubicacion(){
        return this.habitat
    }
}

class Perro extends Animal {
    constructor(raza, color, sonido){
        /*this.raza = raza;
        this.color = color;
        this.sonido = sonido;*/     // es rebundante inicializarlos

        super(raza, color, sonido, 'Casa')  // Inicializa el constructor
    }

    ladrar() {
        return this.sonido;
    }

    sentarse() {
        console.log("*Se sienta*");
    }
}

const Labrador = new Perro('Labrador', 'Blanco', 'Woof');
Labrador.sentarse();
console.log(Labrador.ladrar());
console.log(Labrador.sonidoCaracteristico());

// Clase que recibe con objetos

class Musica {
    constructor(info){
        this.fechaLanzamiento = info.fechaLanzamiento;
        this.artista = info.artista;
        this.genero = info.genero;
        this.titulo = info.titulo;
    }

    reproducir(){
        console.log(`Reproduciendo "${this.titulo}" del artista "${this.artista}"`);
    }

    pausar(){
        return `Pausando "${this.titulo}" del artista "${this.artista}"`
    }
}

// Creacion del objeto
const informacion = {
    fechaLanzamiento: 1986,
    artista: 'Madonna',
    genero: 'pop',
    titulo: 'La isla bonita'
}

const cancion = new Musica(informacion)
const cancion1 = new Musica(
    {
        fechaLanzamiento: 1989,
        artista: 'Madonna',
        genero: 'pop',
        titulo: 'Like a prayer'
    }
)

cancion.reproducir()
console.log(cancion.pausar());
cancion1.reproducir()