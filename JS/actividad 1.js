// Variables con String, Number, Boolean y Null
const receta = "Pastel";
let paso = 1;
let ingredienteslistos = true;
let resultadofinal = null;

if (paso === 1) {
    console.log("Paso 1: Juntando los ingredientes.");
    if (ingredienteslistos) paso = 2;
}

if (paso === 2) {
    console.log("Paso 2: Mezclando la masa.");
    paso = 3;
}

if (paso === 3) {
    console.log("Paso 3: Precalentando el horno.");
    paso = 4;
}

if (paso === 4) {
    console.log("Paso 4: Horneando durante 30 minutos.");
    resultadofinal = "¡Delicioso pastel horneado!";
    paso = 5;
}

if (paso === 5) {
    console.log("Paso 5: ¡Listo! Resultado");
}                                            