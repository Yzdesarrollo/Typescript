"use strict";
// TIPOS DE DATOS EN TYPESCRIPT
//1. string
var saludo = "Hola desde TypeScript 2020";
saludo = "cambio";
//2.number
var numero = 2020;
//3.any
var cualquiera;
cualquiera = "cadena";
//cualquiera = 10;
//4. const
var PI = 3.1416;
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(cualquiera);
    console.log(PI);
}
saludar();
