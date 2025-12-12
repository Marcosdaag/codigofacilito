//La interfaz no guarda logica, es mas bien un contrato

interface IPerson {
    name: string,
    code: string | number,
    age: number,
    description?: string //El signo ? al final es para que un parametro sea opcional al momento de isntanciarlo

    //Incluso podemos definir meotodos y sus valores de retorno
    sayHello?: ()=> string;
}

let response0: IPerson = {
    name: "Marcos",
    code: "01",
    age: 25,
    description: "Hola"
};

let secondPerson: IPerson = {
    name: "Marcos2",
    code: 52,
    age: 25,
    //No da error al no poner descripcion ya que es opcional 
};