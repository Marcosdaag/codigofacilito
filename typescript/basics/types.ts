// TIPOS DE DATOS

// Puedo no declarar el tipo de dato y ts lo va a inferir pero lo ideal es tiparlo para evitrar errores
let personAge: number = 20;
let personName: string = "marcos";
let isAdmin: boolean = true;
let perdon: Object = {};

// Dos formas de definir arrays
let fruits: Array<string> = ['manzana', 'pera'];
let newFruits: string[] = ['manzana', 'pera'];

//Array de objetos json
let newFruits2: Object[] = [{ name: 'banana' }, { name: 'frutilla' }];

// Tipos de datos especiales, any funciona para almacenar cualquier tipo de dato, se usa cuando los datos son complejos de tipar y puede tomar cualquier valor posteriormente. Al usar el tipo any typescript no ofrece autocompletado con metodos porque puede tomar cualquier tipo de valor por lo que no relaciona el dato con una serie de metodos en si
let response: any = "hola";
response = 20;
response = true;
response = ["Hola", 123];

//Al definir como valor de retorno VOID, no hace falta hacer ningun return ya que no devuelve nada
function saludar(): void {
    console.log("hola");
}

let response2: unknown;

let response3: null; //Tiene valor pero es nulo o vacio

let response4: undefined;  //No inicializadas

//Cuando una variable puede recibir mas de un tipo de dato
//Dando un ejemplo, una aplicacion nos devuelve cuanto dinero nos debe una persona, puede devolvernos un numero o en caso de que sea 0 talvez nos devuelve un NULL, para situaciones de este tipo de usan estas pipes "|"
let response5: number | null = 12;
//El operador "?" sirve para verificar que el dato no llega como null o undefined
response5?.toString();

//TS nos permite crear nuestros propios tipos de datos y nos ayuda a centralizar la logica de algunos tipos de datos
type ResponseTypes = string | undefined;
let response6: ResponseTypes; //Le decimos a response6 que es un tipo de dato "ResponseTypes" definido anteriormente

//Tpye assertion > consiste en castear los tipos de datos

//En este caso message no tiene un valor de tipo any por lo que el autocompletado de metodos no funcionaria
let message: any = "";

(message as string).toLowerCase(); //De esta manera le decimos que message va a ser un string y podemos usar toLowerCase

let messageUpper = (message as string).toUpperCase();

//Tambien podemos cambiar el tipo de dato de message de esta forma
let messageToString = <string>message;
