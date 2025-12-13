//Asignamos pi a una constante ya que es algo que no va a modificar su valor
//Con la palabra reservada EXPORT ya estamos trabajando estte archivo como un modulo
export const PI = 3.14;

export interface User {
    id: string;
    name: string;
};

export const generateId = () => {
    return Math.floor(Math.random() * 100);
};