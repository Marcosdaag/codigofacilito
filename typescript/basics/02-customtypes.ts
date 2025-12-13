type Person = {
    name: string,
    code: string | number,
    description?: string
}

const newPerson: Person = {
    name: "Marcos",
    code: 12
}

//Type se usa mas para asignarles distintos valores a una variable o elemento especifico
type ServiceResponse = string | null | number | undefined;
type UserRoles = "admin" | "common";

let response: ServiceResponse;
const myUserType: UserRoles = "admin";