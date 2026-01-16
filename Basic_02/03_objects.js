// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "priyanka",
    "full name": "priyanka rathod",
    [mySym]: "mykey1",
    age: 18,
    location: "kalaburagi",
    email: "priya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "priyanka@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "priyanka@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
   console.log(`Hello Js use, ${this.name}`);
}
JsUser.greetingTwo = function(){
    console.log("Hello Js user");
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







