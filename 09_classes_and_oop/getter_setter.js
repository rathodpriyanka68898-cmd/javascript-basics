class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }

    get password(){
        return `${this._password}priyanka`
    }

    set password(value){
        this._password = value 
    }
}

const priyanka = new User("p@priyanka.ai", "sejal")
console.log(priyanka.password);
