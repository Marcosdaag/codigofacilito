//La diferencia entre implements y extends, es que cuando extendemos ya se definen las variables y metodos, cuando implementamos no

//Nos defije que va a tener un objeto "contrato"
interface IPerson {
    name: string;
    sayHello: () => string; //Le decimos que va a tener el metodo pero sin logica
}

//Crea el objeto y  puede tener implementaciones
class Person{
    sayHello(){
        return "hola";
    }
}

//Con class se pueden crear nuevas instancias con new en cambio con interfaces no
const newPerson: Person = new Person();
newPerson.sayHello();

//Implements nos da el plano pero tenemos que completarlo
class Admin implements IPerson {
    name = "Marcos"

    sayHello(){
        return "hola";
    }
}

//Extends nos completa automaticamente
class NormalUser extends Person {}
