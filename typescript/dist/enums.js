//Un enum es un tipo de dato que nos permite alamcenar listas de valores estaticos
//Por defecto los enums toman valor de 0 en adelante pero podemos asignarle el valor que queramos
var Users;
(function (Users) {
    Users[Users["NormalUser"] = 0] = "NormalUser";
    Users[Users["Payeduser"] = 1] = "Payeduser";
    Users[Users["AdminUser"] = 105] = "AdminUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
//Devuelve 2 ya que es la posicion dentro del array de usuarios
console.log(myUser);
