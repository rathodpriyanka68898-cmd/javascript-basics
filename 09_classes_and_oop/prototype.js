let myName = "priyanka     "
let mychannel = "Rathod    "

console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]


let heropower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harsha = function(){
    console.log(`harsha is present in all objects`);
}

Array.prototype.heyHarsha = function(){
    console.log(`Harsha says hello`);
}

// heroPower.harsha()
//myHeros.harsha()
//myHeros.heyHarsha()
// heropower.heyHarsha()

// inheritance

const User = {
    name: "priyanka",
    email: "priyanka@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    isAssignment: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Rathodpriyanka    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"harsha".trueLength()
"icetea".trueLength()