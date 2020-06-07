// TIPOS DE DATOS EN TYPESCRIPT

//1. string
let saludo:string = "Hola desde TypeScript 2020";
saludo = "cambio";

//2.number
let numero:number = 2020;

//3.any

let cualquiera:any;
cualquiera = "cadena";
//cualquiera = 10;

//4. const
const PI = 3.1416;

function saludar(){
    console.log(saludo);
    console.log(numero);
    console.log(cualquiera);
    console.log(PI);
}

saludar();