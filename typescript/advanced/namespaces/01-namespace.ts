//Namespaces agrupa datos
namespace DatabaseEntity {
    
    //Clase usuario
    export class User{
        constructor(public name:string){}
    }

    //Variable
    const myUser = new User("marcos");

    console.log(myUser);
};
