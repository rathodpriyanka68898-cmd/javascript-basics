
function sayMyName(){
console.log("p");
console.log("r");
console.log("i");
console.log("y");
console.log("a");
console.log("n");
console.log("k");
console.log("a");
}

//sayMyName()

//function addTwoNumbers(number1,number2){

//    console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,"4")

//console.log("Result:",result);

function loginUserMessage(username = "sonu"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("priyanka"))
//console.log(loginUserMessage("priyanka"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 500, 800, 5000))

const user = {
    username: "priyanka",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sonu",
    price:399
})

const myNewArray = [200, 500, 700, 300]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 3000]));








