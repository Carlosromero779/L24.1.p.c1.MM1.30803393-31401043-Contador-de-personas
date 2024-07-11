/*CONTADOR DE PERSONAS
*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
*datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
*Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
*Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
*Cantidad de personas: 12
*Cantidad de hombres: 5
*Cantidad de mujeres: 7
*/ 
import Cl_contador from "./Cl_contador.js";
import Cl_personas from "./Cl_personas.js";

let persona1 = new Cl_personas("Luisa", "F");
let persona2 = new Cl_personas("Ana", "F");
let persona3 = new Cl_personas("Jose", "M");
let persona4 = new Cl_personas("Carmen", "F");
let persona5 = new Cl_personas("Rosa", "F");
let persona6 = new Cl_personas("Jose", "M");
let persona7 = new Cl_personas("Maria", "F");
let persona8 = new Cl_personas("Luz", "F");
let persona9 = new Cl_personas("Rafael", "M");
let persona10 = new Cl_personas("Liz", "F");
let persona11 = new Cl_personas("Carlos", "M");
let persona12 = new Cl_personas("Leo", "M");

let contador = new Cl_contador();
contador.procesarPersonas(persona1);
contador.procesarPersonas(persona2);
contador.procesarPersonas(persona3);  
contador.procesarPersonas(persona4);
contador.procesarPersonas(persona5);
contador.procesarPersonas(persona6);
contador.procesarPersonas(persona7);
contador.procesarPersonas(persona8);
contador.procesarPersonas(persona9);
contador.procesarPersonas(persona10);
contador.procesarPersonas(persona11);
contador.procesarPersonas(persona12);  

let salida = document.getElementById("salida");
salida.innerHTML = `<br> Cantidad de personas: ${contador.cantidadPersonas()}`;
salida.innerHTML += `<br> Cantidad de hombres: ${contador.cantidadHombres()}`;
salida.innerHTML += `<br> Cantidad de mujeres: ${contador.cantidadMujeres()}`;
