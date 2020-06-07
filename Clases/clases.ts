class Persona {
    private nombre:string;

    constructor(nombre: string) {
        this.nombre = nombre;
        
    }

    getNombre():string{
        return this.nombre;
    }

    static metodoEstatico():Number{
        return 10;
    }
}

let persona1 = new Persona("Yeison");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());