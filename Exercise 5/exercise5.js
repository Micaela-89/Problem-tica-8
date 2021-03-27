/********************************
a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for
de JavaScript para mostrar una alerta utilizando cada una de las palabras.
*********************************/
var fruits = ["apple", "pear", "banana", "orange", "pineapple"];
for (var i= 0; i < fruits.length; i++) {
    alert(fruits[i]);
}


/********************************
b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.
*********************************/

var fruits = ["apple", "pear", "banana", "orange", "pineapple"];
for (var i = 0; i < fruits.length; i++) {
    var firstLetter = fruits[i].substring(0,1);
    var upperCase = firstLetter.toUpperCase();
    var lowerCase = fruits[i].substring(1);
    var modifiedFruits = upperCase + lowerCase;
    alert(modifiedFruits);
}

/********************************
c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa.
*********************************/
var fruits = ["apple", "pear", "banana", "orange", "pineapple"];
var sentence = " ";
for (var i in fruits) {
    var sentence= sentence + fruits[i] + " ";
}
alert(sentence);

/********************************
d. Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array,
desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final
(utilizar console.log).
*********************************/

var empty= [];

for (var i= 0; i < 10; i++) {
    empty.push(i)
}
console.log(empty);
