const user = {
    username: "priyanka",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "sonu"
//user .welcomeMessage()

//console.log(this);

//function pookie(){
//    let username = "priyanka"
//    console.log(this .username);
//}

//pookie()

//const pookie = function () {
//    let username = "priyanka"
//    console.log(this.username);
// }

const pookie = () => {
    let username = "priyanka"
    console.log(this);
}


//pookie()

//const addTwo = (num1, num2) => {
//    return num1 + num2
//}

//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 ) 

const addTwo = (num1, num2) =>  ({username: "priyanka"})


console.log(addTwo(3, 4));


//const myArray = [2, 4, 6, 8, 9]

//myArray.forEach()
