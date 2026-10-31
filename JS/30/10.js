
// ==========================================
// SISTEMA DE INVENTARIO DE UNA TIENDA
// ==========================================

// 1. CREAR UN ARREGLO CON 8 PRODUCTOS

let productos = [
    "Arroz",
    "Frijol",
    "Aceite",
    "Leche",
    "Pan",
    "Huevos",
    "Café",
    "Azúcar"
];

console.log("===== INVENTARIO ORIGINAL =====");
console.log(productos);


// 2. CONSULTAR PRODUCTOS POR SU POSICIÓN

console.log("Primer producto:", productos[0]);
console.log("Cuarto producto:", productos[3]);
console.log("Último producto:", productos[productos.length - 1]);


// 3. AGREGAR TRES PRODUCTOS CON PUSH()

productos.push("Sal");
productos.push("Galletas");
productos.push("Refresco");

console.log("===== PRODUCTOS AGREGADOS =====");
console.log(productos);


// 4. ELIMINAR PRODUCTOS

// Eliminar el último producto
productos.pop();

// Eliminar el primer producto
productos.shift();

console.log("===== PRODUCTOS DESPUÉS DE ELIMINAR =====");
console.log(productos);


// 5. MODIFICAR EL TERCER PRODUCTO

productos[2] = "Leche deslactosada";

console.log("===== PRODUCTO MODIFICADO =====");
console.log(productos);


// 6. BUSCAR UN PRODUCTO

let productoBuscado = "Pan";

let disponible = productos.includes(productoBuscado);

let posicion = productos.indexOf(productoBuscado);

console.log("===== BÚSQUEDA =====");
console.log("Producto buscado:", productoBuscado);
console.log("¿Está disponible?:", disponible);
console.log("Posición encontrada:", posicion);


// 7. MOSTRAR INVENTARIO CON FOR

console.log("===== INVENTARIO CON FOR =====");

for (let i = 0; i < productos.length; i++) {
    console.log((i + 1) + ". " + productos[i]);
}


// 8. RECORRER EL INVENTARIO CON FOREACH()

console.log("===== INVENTARIO CON FOREACH =====");

productos.forEach(function(producto) {
    console.log("Producto disponible: " + producto);
});


// 9. MOSTRAR TOTAL DE PRODUCTOS

let totalProductos = productos.length;

console.log("===== TOTAL DE PRODUCTOS =====");
console.log("Total de productos:", totalProductos);


// 10. CUENTA REGRESIVA CON WHILE

console.log("===== CUENTA REGRESIVA =====");

let contador = totalProductos;

while (contador >= 0) {
    console.log(contador);
    contador--;
}

console.log("===== FIN DEL PROGRAMA =====");