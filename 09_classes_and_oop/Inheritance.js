class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const shree = new Teacher("shree", "shree@teacher.com", "123")

shree.logMe()
const sejalchavan = new User("sejalchavan")

sejalchavan.logMe()

console.log(shree instanceof User);

