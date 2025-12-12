interface Person {
    name: string;
    age: number;
}
;

type Getter<T> = {
    [Property in keyof T]: () => T[Property];
};

type GetPerson = Getter<Person>;

interface Animal {
    id: string;
    name: string;
    tpye: number;
};

type GetAnimal = Getter<Animal>;
