// https://www.typescriptlang.org/docs/handbook/utility-types.html

//Partial<T>
interface Task {
    id: number;
    name: string;
    description: string;
};

/* 
Creamos una funcion para hacer un update de una task especifica pero hay casos en los que no quiero modififcar todos los parametros
por lo que al usar el utulitytype partial, nos hace una copia de task pero con los parametros y el "?" para que los datos no sean obligatorios
*/
function updateTask(id: string, task: Partial<Task>) { }

const newTask = { name: "kevin" };

updateTask("1", newTask);

//Required<T>
//Contrario al partial, hace que todos los campos sean obligatorios
interface ToDo {
    id?: string;
    name?: string;
};

const myTodo: Required<ToDo> = { id: "1", name: "Cortar el pasto" };

//Records<Keys, Types> Para la creacion de objetos
interface CatInfo {
    age: number;
    name: string;
};

type CatName = "moi" | "baris" | "luffy";

//Creo objetos en base a unas keys, CatName llama a todos los tipos de cats y CatInfo define la estructura de cada cat
const cats: Record<CatName, CatInfo> = {
    baris: { age: 10, name: "baris" },
    luffy: { age: 12, name: "luffy" },
    moi: { age: 13, name: "moi" }
};


//Pick <T, Properties>
//Puedo crear elementos que pidan solamente ciertos campos de una interface principal
interface Pending{
    tittle: string;
    description: string;
    completed: boolean;
};

type PendingPreview = Pick<Pending,"tittle" | "completed">;

const otherPending: PendingPreview = {completed: false, tittle: "Cortar el pasto"};

//Omit<T, Properties>
//Todo lo contrario a pick, omite todos lso campos seleccionados
type PendingOmited = Omit<Pending, "completed" | "description">;

const newPendingOmit: PendingOmited = {tittle: "Hacer la tarea"}