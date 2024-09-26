const fs = require("fs");

// Crear el archivo "Saludo.txt" con el contenido "Hola Mundo!"
fs.writeFile("Saludo.txt", "Hola Mundo!", (err) => {
    if (err) {
    return console.error("Error al escribir el archivo:", err);
    }

    console.log("Archivo creado con éxito.");

  // Leer el contenido del archivo "Saludo.txt" luego de ser creado
    fs.readFile("Saludo.txt", "utf8", (err, data) => {
    if (err) {
        return console.error("Error al leer el archivo:", err);
    }

    // Imprimir el contenido del archivo
    console.log("Contenido del archivo:", data);
    });
});
