/**
 * 6. Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. Dicha
calificación se compone de los siguientes porcentajes:
-> 55% del promedio de sus tres calificaciones parciales.
-> 30% de la calificación del examen final.
-> 15% de la calificación de un trabajo final.
 */

function calcular_nota() {
    let examen_final = parseFloat(document.getElementById('trabajo_final').value);
    let trabajo_final = parseFloat(document.getElementById('examen_final').value);
    let porcentaje_notas = sacar_promedio();
        
    let porcentaje_examen = (examen_final * 30) / 100;
    let porcentaje_trabajo = (trabajo_final * 15) / 100;
    let nota_final = porcentaje_notas + porcentaje_examen + porcentaje_trabajo;

    let nota = document.getElementById('nota')

    if (nota_final >= 0) {
        nota.innerHTML = '<p style="color:green;font-size: 20px;">' +'<b>'+ `La nota final del alumno es -> ${nota_final}` + '</p>';
    } else {
        nota.innerHTML = '<p style="color:red;">' + "Debe ingresar todos los datos requeridos" + '</p>';
    }

    function sacar_promedio(){
        let nota_1 = parseFloat(document.getElementById('nota_1').value);
        let nota_2 = parseFloat(document.getElementById('nota_2').value);
        let nota_3 = parseFloat(document.getElementById('nota_3').value);
        let promedio_notas = nota_1 + nota_2 + nota_3;
        let porcentaje_notas = (promedio_notas / 3) * 0.55;

        return porcentaje_notas
    }

}





