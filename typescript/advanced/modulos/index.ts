import { generateId, PI, User } from "./01-utils.module";

//Tambien podemos "renombrar las clases importadas" para que no existan conflictos con otras interfaces y demas creadas en este fichero
import { User as Person } from "./01-utils.module"; //De esta mnanera usariamos person pero es una extension de User

const piNumber = 10 * PI;

const myUser: User = { id: generateId().toString(), name: 'Marcos' };

//OTRA SINTAXIS DE IMPORTACION
import * as Utils from "./01-utils.module";
const myUser2: Utils.User = { id: generateId().toString(), name: 'Marcos' };