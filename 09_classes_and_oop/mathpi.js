const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descripter);

//console.log(Math.PI);
//Math.PI = 5
//console.log(Math.PI);

const tea = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true, 

    orderTea: function(){
        console.log("tea nahi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(tea, "name"));

Object.defineProperty(tea, 'name',{
    //writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(tea, "name"));

for (let [key, value] of Object.entries(tea)) {
    if (typeof value !=='function') {
        
        console.log(`${key} : ${value}`);
    }
}    