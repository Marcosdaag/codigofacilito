//Un enum es un tipo de dato que nos permite alamcenar listas de valores estaticos.

/* Utilidad de los enums:
 -nos permite centralizar codigo
 -evitar repeticion de definiciones
 -mantenibilidad a futuro 
*/

//Por defecto los enums toman valor de 0 en adelante pero podemos asignarle el valor que queramos ya sea de tipo Number o no
enum Users {
    NormalUser,
    Payeduser,
    AdminUser = 105
}

const myUser = Users.AdminUser;

//Devuelve 105 ya que es el valor dentro del array de usuarios
console.log(myUser);