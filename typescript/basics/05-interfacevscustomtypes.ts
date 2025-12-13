interface Person {
    name: string;
    age: number;
}

//NO SE PUEDE EXTENDER UN TYPE DE UN TYPE (type x extender "type")
//NO SE PUEDE EXTENDER UN TYPE DE UNA INTERFACE (type x extendes "interface")

//Esto se puede extender ya sea de un interface o un type
interface Employee extends Person {
    code: number;
}

const newEmployee: Employee = {
    name: '',
    age: 40,
    code: 2
}

//Como hacer un merge de types

type User = {
    id: string;
}

//Extiendo un type de otro type pero tambien podria unir un type con una interface
type Admin = User & Person;

const myAdmin: Admin = {
    name: '',
    age: 20,
    id: ''
}

//Los types tienen mas especificidad al establecer lo valores o tipos de datos lo que no se puede hacer con interface

//Las interfaces se pueden acoplar entre si sin que lo hagamos manualmente
interface Developer {
    name: string;
    stack: string[];
}

interface Developer {
    phone: string;
}

//Al definir una constante con el valor de Developer tiene que mergear ambas interfaces, por lo que nos pode las propiedades de ambas
const me: Developer = {
    name: '',
    phone: '',
    stack: []
};