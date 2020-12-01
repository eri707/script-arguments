// remove node and index.js from arguments
var myArgs = process.argv.slice(2);
// iterate over arguments 
myArgs.forEach(element => {
    console.log(element);
});

