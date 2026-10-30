function Nombrecompleto(){
    alert("esteisi");
    alert("ramirez")
}

Nombrecompleto();

function nombre (){
    console.log("Alexander");
}
function Apellidi1 (){
    console.log("olan");
}
function Apellidi2 (){
    console.log("Ramirez");
}
function NomComp (){
    nombre();
    Apellidi1()
    Apellidi2();
}
NomComp();



function saludo (nombre) {
    console.log("hola" + nombre)
}
saludo("Alexis");
saludo("Maria");
saludo("ola adios");

function persona (nombre, edad) {
    console.log("nombre: " + nombre);
    console.log("edad: " + edad);
}
persona("Kevin", 16);

function sumar(numero1, numero2){
    let resultado = numero1 + numero2;
    return resultado;
}

let total = sumar(10, "5");
console.log(total);

function evaluaiciones(calificacion) {
    if(calificacion >=7){
return "aprobado";
    } else {
        return "reprobaste:("
    }
}
let resultado = evaluaiciones(7);
console.log(resultado);
