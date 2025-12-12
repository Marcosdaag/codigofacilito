//Formas de declarar funciones en ts

// 1- Arrow functions
const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
};

sayHi("Maros");

// 2- Palabra reservada function
function sayGoodbye(name: string) {
    console.log(`Adios ${name}`);
};

sayGoodbye("Marcos");

//Como sacarle el provecho a typescript
/* 
Por defecto typescript infiere que una funcion no retorna ningun valor, por lo que es void.
Para asegurarnos de que una funcion retorne un tipo de valor especifido declaramos despues de : el tipo de dato a devolver de la funcion, 
de estar forma nos aseguramos de que tiene que tener un return de algun tipo
*/
function suma(num1: number, num2: number): number {
    let suma: number = num1 + num2;
    return suma;
};

suma(1, 2);

//Parametros en las funciones
const response = {
    id: 1,
    name: "marcos"
};

/* 
En este caso creo una funcion show que extrae el parametro NAME de un objeto con las distintas propiedades (name, id) y asigno que la funcion va a retornar un string
*/
function show({ name }: { id: number; name: string }): string {
    console.log(`El nombre del usuario es ${name}`);
    return name;
};

//Como parametro de la funcion le paso el objeto tipo response que tiene los mismos parametros que el tipo de objeto que pide la funcion
show(response);



//En vez de que el parametro de la funcion sea muy grande, se podria hacer con una interface ej:

//Interfaz del tipo de respuesta
interface ResposeService {
    name: string;
    id: number;
};

//Constante del tipo de respuesta que de manera obligatoria tiene que cumplir con el contrato de la interfaz
const response2: ResposeService = {
    id: 1,
    name: "Cata"
};

//Funcion que extrae el parametro id de un objeto tipo ResponseService
function showId({ id }: ResposeService): number {
    return id;
};

//Le pasamos a la funcion un objeto response2 que cumple con la interfaz de ResponseService
showId(response2);