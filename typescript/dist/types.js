// TIPOS DE DATOS
// Puedo no declarar el tipo de dato y ts lo va a inferir pero lo ideal es tiparlo para evitrar errores
var personAge = 20;
var personName = "marcos";
var isAdmin = true;
var perdon = {};
// Dos formas de definir arrays
var fruits = ['manzana', 'pera'];
var newFruits = ['manzana', 'pera'];
//Array de objetos json
var newFruits2 = [{ name: 'banana' }, { name: 'frutilla' }];
// Tipos de datos especiales, any funciona para almacenar cualquier tipo de dato, se usa cuando los datos son complejos de tipar y puede tomar cualquier valor posteriormente. Al usar el tipo any typescript no ofrece autocompletado con metodos porque puede tomar cualquier tipo de valor por lo que no relaciona el dato con una serie de metodos en si
var response = "hola";
response = 20;
response = true;
response = ["Hola", 123];
//Al definir como valor de retorno VOID, no hace falta hacer ningun return ya que no devuelve nada
function saludar() {
    console.log("hola");
}
var response2;
var response3; //Tiene valor pero es nulo o vacio
var response4; //No inicializadas
