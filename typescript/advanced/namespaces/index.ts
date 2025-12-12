//De esta manera hago referencia al namespace para utilizarlo aca
/// <reference path="01-namespace.ts" />

//La clase dentro del namespace tiene que ser exportada con la palabra "export"
const otherUser = new DatabaseEntity.User("flavio");
console.log(otherUser);