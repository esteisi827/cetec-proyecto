function saludo (nombre) {
    console.log("hola" + nombre)
}
saludo("Alejandra");
saludo("Maria");
saludo("jejeje");

function persona (nombre, edad) {
    console.log("nombre: " + nombre);
    console.log("edad: " + edad);
}
persona("omar", 30);
/*
let total = sumar(10, "5");
console.log(total);
*/
function evaluarPromedio(nota1, nota2, nota3) {
  
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;
    
    if (promedio >= 7) {
        return "¡Aprobado! Tu promedio es: " + promedio;
    } else {
        return "Reprobaste. Tu promedio es: " + promedio;
    }
         
}

let resultadoFinal = evaluarPromedio(8, 6, 9);
console.log(resultadoFinal);