// ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
      return `${this.password}abc`
}
changeUsername(){
       return `${this.username.toUpperCase()}`
}

}

const shree = new User("shree", "shree@gmail.com", "6362")

console.log(shree.encryptPassword());
console.log(shree.changeUsername);

// behind the scene

function User(username, email, password){
   this.username = username;
   this.email = email;
   this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase}abc`
}

const sonu = new User("sonu", "sonu@gmail.com", "6362")

console.log(sonu.encryptPassword());
console.log(sonu.changeUsername());

