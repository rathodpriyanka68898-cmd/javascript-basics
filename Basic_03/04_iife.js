// Immediate Invoked Function Expressions (IIFE)


(function pookie () {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('priyanka')