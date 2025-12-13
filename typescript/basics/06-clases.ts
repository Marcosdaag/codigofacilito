//Clase principal
class Animal {
    //Los datos publicos son accesbiles en la clase y cualquier clase que herede de
    public name: string = "Generic Animal"

    //Encapsulamiento
    //Los datos privados son accesibles desde la misma clase
    private age: number = 10;

    //No es accesible desde un objeto ya creado "const myDog: Dog = new Dog();" pero si desde la CLASE como TAL
    protected identity: string = "111";

    //El constructor es la funcion que representa a la clase y es la primer funcion que se ejecuta al crear el objeto, podemos calcular cosas o asignar datos, al momento de heredar esta funcion se ejecutra de forma automatica
    constructor() {

    }

    sayHi() {
        console.log("Grr", this.age);
    }
}

//Herencia
class Dog extends Animal {
    type: string = "pastor aleman";

    sayHi(): void {
        //Puedo acceder al dato protected
        this.identity;
    }
}

const Gato: Animal = new Animal();
Gato.sayHi();

const myDog: Dog = new Dog();