/*  TIPOS DE DATOS

    let nombre:string = 'peter';
    
    let numero:number =123;
    
    let booleano:boolean = true;
    
    let hoy:Date = new Date();
    
    hoy = new Date('2020-01-14');
    
    console.log( hoy );
    
    let cualquiera:any;
    
    cualquiera = nombre;
    cualquiera = numero;
    cualquiera = booleano;
    cualquiera = hoy;
---------------------------------------------
 PLANTILLAS LITERALES CON ES6
    let nombre:string = 'Juan';
    let apellido:string = 'Perez';
    let edad:number = 32;

    let texto = `Hola, ${ nombre } ${apellido} ${ edad }`;

    let texto2:string = `${ 1 + 2 }`;

    console.log(texto2);

    

    function activar(quien:string,                             objeto:string="señal",
                    momento?:string ){
        
        let mensaje:string;   
        
        if( momento ){
            mensaje = `${ quien } activo la ${ objeto }en la ${ momento }`;
        }else{
            mensaje = `${ quien } activo la ${ objeto }`;
        }

        console.log(mensaje);
    }

    activar("Gordon", "señal","tarde");

 ----------------------------------------------   

// FUNCIONES DE FLECHA
//Normal
let mifuncion = function( a: string){
       return a;
   }
// Funcion de flecha
let mifuncionf =(a: any) => a;

let mifuncion2 = function(a:number,b:number){
     return a + b;
 }

 let mifuncion2f = (a:number, b:number) => a+b;

 let mifuncion3 = function(nombre:string){
     nombre = nombre.toUpperCase();
     return nombre;
 }

 let mifuncion3f = ( nombre:string )=>{nombre = nombre.toUpperCase();
    return nombre;}

//Porque usar la funcion flecha es que el this no es afectado cuando se ejecuta dentro de otra funcion.

let nombre:string = "Pedro";

let hulk = {
    nombre:"Hulk",
    smash(){

        setTimeout( function(){

            console.log(this.nombre + " smash!!");
        }, 1500 );
        
    }
}

hulk.smash();
-------------------------------------

let nombre:string = "Pedro";

let hulk = {
    nombre:"Hulk",
    smash(){

        setTimeout( ()=> console.log(this.nombre + " smash!!"), 1500 );
        
    }
}

hulk.smash();



// Destructuracion de Objetos y Arreglos


// Destructuracion de Objetos...
let avenger = {
    nombre:"Steve",
    clave: "Capitan America",
    poder: "Droga"
}

//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

let { nombre,clave,poder } = avenger;

console.log(nombre,clave,poder);

// Destructuracion de Arreglos

let avengers:string[] = ["Thor","Spiderman","Ironman"];

let[thor, capi, Hulk] = avengers;

console.log(thor,capi,Hulk);



// Promesas en ES6

let promesa1 = new Promise( function( resolve, reject){

    setTimeout( ()=>{
        
        console.log("Promesa terminada");
        
        // Termina bien
        resolve();

        // Termina mal
    //  reject();

    }, 1500 )

})

console.log("Paso 1");

promesa1.then( function(){
    console.log("Ejecutarse cuando se termine bien!");
}, 
    function(){
       console.error("Ejecutarse si todo sale mal");
    }
)

console.log("Paso 2");



// INTERFACES TYPESCRIPT

interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision(xmen:Xmen){

    console.log("Enviando a: " + xmen.nombre);
}

function enviarCuartel(xmen:Xmen){

    console.log("Enviando al cuartel: " + xmen.nombre);
}


let wolverine:Xmen = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};

enviarMision(wolverine);
enviarCuartel(wolverine);



// POO

// Clases

class Avenger {

    nombre:string = "Sin nombre";
    equipo:string = undefined;
    nombreReal:string = undefined;
    
    puedePelear:boolean = false;
    peleasGanadas:number = 0;

// constructor permite inicializar variables y metodos antes de ser usada clase.

    constructor(nombre: any,equipo: any,nombreReal: any){
         this.nombre = nombre;
         this.equipo = equipo;
         this.nombreReal = nombreReal;
    }
}

let antman:Avenger = new Avenger("Antman","cap","Scott Lang");

console.log(antman);

// Modulos

//Importacion 1
// Para llamarlos como este caso deben estar en un archivo aparte y la clase que voy a importar debe tener la palabra export
// ej: export class Xmen{} 
import { Xmen } from "./clases/Xmen.class"
import { Villanos } from "./villanos/Villanos.class"

//Importacion 2
//crear un index.ts export y donde los vaya a llamar uso solo un import.


let wolverine = new Xmen("Logan","Wolverine");

let lex = new Villanos("Lex Luthor","Conquistar el mundo");

wolverine.imprimir();
lex.imprimirPlan();

// DECORADORES EN LAS CLASES

function consola( constructor:Function ){
    console.log( constructor );
}

@consola // Enviar como parametro el constructor a fuerza
class Villano{

   //public nombre:string;
    //constructor( nombre:string ){

     //   this.nombre = nombre;

    //}

    constructor( public nombre:string ) {



    }
}

*/

// Componentes son pequeñas clases que cumplen una tarea especifica son clases normales con un decorador especifico ej:(menu de navegacion,sidebar o barra lateral,pie de pagina)

// CREANDO UN COMPONENTE MANUALMENTE
// Crear un component
// Crear una Carpeta con ese nombre
// dentro de la carpeta component Crear carpeta para header

// Dentro de la carpeta header crear un archivo llamada header.component.ts

// 1.dentro este archivo crear la clase
//class HeaderComponent{

//}
// 2.importar al core de angular

//import { Component } from '@angular/core';

// 3. Para decirle angular que este es un componente debo asignarle el decorador

//@Component({
//    selector: 'app-header',
//    template: `<h1>Header component</h1>`
//})

// 4. Debo importarlo en app.module.ts

// import { HeaderComponent } from './ruta del archivo'

// exportar la clase HeaderComponent

//export class HeaderComponent{

//}

// Declararlo en el NgModule

//NgModule({
//    declarations:[
//        headercomponent
//    ],
//})

// En el html usamos la etiqueta <app-header></app-header> para visualizar lo que hay dentro del componente

// Uso de template

import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<h1>Header component</h1>`
})
export class HeaderComponent{

}

// Uso de templateUrl

//En este ejemplo creamos un componente llamado header.component.ts
// Ahora crearemos un archivo llamado header.component.html

import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{

}

// CREANDO COMPONENTES DE FORMA AUTOMATICA
// Dentro de la carpeta del proyecto
// ng generate component carpeta/footer
// abreviado ng g c components/footer



//DIrectivas estructurales
// son instrucciones que le dicen a la parte del html que tiene que hacer
// - *nIf = "true"(mostrar) ó *nIf = "false"(ocultar no existe) = se encarga de mostrar u ocultar elementos html en la pagina web
// - *nFor = se encarga de hacer repeticiones de elementos en el html en la pagina.