/** Completo cada console.log vació con el código necesario para realizar cada ejercicio. Ayuda: https://www.w3schools.com/js/js_string_methods.asp  */

let texto = "Javascript es genial"; // Si cambiaramos esta palabra, debería seguir funcionando todos los ejercicios

console.log("Ejercicio 1: Longitud del string"); 
console.log(texto.length);  // por ejemplo, aquí, entre los paréntesis, tenemos que poner: texto.length

console.log("Ejercicio 2: Primer carácter del string"); 
console.log(texto.charAt(0)); 

console.log("Ejercicio 3: Último carácter del string"); 
console.log(texto.at(19)); 

console.log("Ejercicio 4: Primeros 3 caracteres del string"); 
console.log(texto.at(0)+texto.at(1)+texto.at(2)); 

console.log("Ejercicio 5: Últimos 3 caracteres del string"); 
console.log(texto.slice(17, 19)); 

console.log("Ejercicio 6: String en mayúsculas"); 
console.log(texto.toUpperCase()); 

console.log("Ejercicio 7: String en minúsculas"); 
console.log(texto.toLowerCase()); 

console.log("Ejercicio 8: Devuelve el índice del primer carácter 's'"); 
console.log(texto.indexOf('s')); 

console.log("Ejercicio 9: Posición del último carácter 's'"); 
console.log(texto.lastIndexOf('s')); 

console.log("Ejercicio 10: String en orden inverso"); 
console.log(texto.split("").reverse().join("")); 
