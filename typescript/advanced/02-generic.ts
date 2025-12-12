//Tipos genericos
/* 
Esto sirve cuando un dato puede cambiar o  recibir distintos tipos pero no queremos escribir toda la cantidad de valores que puede tomar,
cuando agregamos <T> a la interfaz, estamos agregandole un tipo de dato dinamico
*/
interface myInterface<T> {
    field: T;
};

//Le asigno a una constante la interface y le decimos que va a recibir como parametro un number
const myValue: myInterface<number> = {
    field: 24
};

//Ejemplos con clases y funciones
class MyClass<T> {
    field: T;

    constructor(field:T){
        this.field = field;
    }
};

const myObject: MyClass<string> = new MyClass("field");


//Ejemplo de funcion que pide datos a un servidor
/* 
Tengo una funcion que recibe un dato de tipo T y que devuelve una promesa con un dato tipo T
*/
function getData<T>(id:string): Promise<T> | void {}


