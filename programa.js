/**
 * 6. Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. Dicha
calificación se compone de los siguientes porcentajes:
-> 55% del promedio de sus tres calificaciones parciales.
-> 30% de la calificación del examen final.
-> 15% de la calificación de un trabajo final.
 */

function calcular_nota(){
let nota_1 = parseFloat(document.getElementById('nota_1').value);
let nota_2 = parseFloat(document.getElementById('nota_2').value);
let nota_3 = parseFloat(document.getElementById('nota_3').value);

let examen_final = parseFloat(document.getElementById('trabajo_final').value);
let trabajo_final = parseFloat(document.getElementById('examen_final').value);
let promedio_notas = nota_1 + nota_2 + nota_3
porcentaje_notas = ((promedio_notas / 3) * 55)/100;
porcentaje_examen = (examen_final * 30)/100;
porcentaje_trabajo = (trabajo_final * 15)/100;
nota_final = porcentaje_notas + porcentaje_examen + porcentaje_trabajo;

// console.log(porcentaje_notas);
// console.log(porcentaje_examen);
// console.log(porcentaje_trabajo);
// console.log(nota_final);
document.write(`La nota final del alumno es -> ${nota_final}`)
}
/**
 * Dos vehículos viajan a diferentes velocidades (v1 y v2) y están distanciados por una distancia d.
El que está detrás viaja a una velocidad mayor. Se pide hacer un algoritmo para ingresar la
distancia entre los dos vehículos (km) y sus respectivas velocidades (km/h) y con esto determinar
y mostrar en qué tiempo (minutos) alcanzará el vehículo más rápido al otro
 */




