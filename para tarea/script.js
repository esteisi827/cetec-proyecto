// 1. Pedir datos
let nombre = prompt("Nombre:");
let edad = Number(prompt("Edad:"));
let estatura = Number(prompt("Estatura (cm):"));
let dinero = Number(prompt("Presupuesto ($):"));

// 2. Clasificar edad
let categoria = "Primera infancia";
if (edad >= 60) categoria = "Adulto mayor";
else if (edad >= 18) categoria = "Adulto";
else if (edad >= 13) categoria = "Adolescente";
else if (edad >= 6) categoria = "Infantil";

// 3. Atracciones (Sí / No)
let carrusel = edad >= 3 ? "Sí" : "No";
let montana = (edad >= 12 && estatura >= 140) ? "Sí" : "No";
let torre = (edad >= 18 && estatura >= 160) ? "Sí" : "No";

// 4. Costo de entrada
let costo = 0;
if (edad >= 60) costo = 80;
else if (edad >= 13) costo = 200;
else if (edad >= 6) costo = 100;

// 5. Verificar dinero
let resta = dinero - costo;
let estadoPago = resta >= 0 ? "Alcanza (Sobra " + resta + ")" : "Falta dinero (Faltan " + Math.abs(resta) + ")";

// 6. Cupón de comida
let cupon = (edad >= 60 || (edad >= 13 && edad <= 17 && dinero >= 500)) ? "Sí" : "No";

// 7. Mostrar resultados
console.log("Visitante: " + nombre + " (" + categoria + ")");
console.log("Atracciones: Carrusel: " + carrusel + " | Montaña Rusa: " + montana + " | Torre: " + torre);
console.log("Entrada: " + costo);
console.log("Estado de dinero: " + estadoPago);
console.log("Cupón de comida: " + cupon);