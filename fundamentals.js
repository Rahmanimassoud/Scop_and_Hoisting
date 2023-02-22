
// SCOPE========== scop is the visibility or accessibility of information, such as variables and functions to a particular section of code. JavaScript is function scoped and has 2 types of scope. Global and local scope.

// Predict the scopes of the following code.

var beatles = ['Paul', 'George', 'John', 'Ringo'];

function printNames(names) {
    function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
        var name = names[index];

        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

//  we always have a global scope, and each function will create a new scope, so we have three scopes in our code.


// HOISTING==============


magicalUnicorns();
var magicalUnicorns = function(){
    console.log("Will it blend?");
}
console.log("Don't breathe this!");

// This will error, The variable magicalUnicorns got hoisted to the top, and we tried to invoke it before we assigned the function to it.


// Hoisting challenges

// 1-
console.log(example);
let example = "I'm the example!";    
// will produce ReferenceErrors.

// 2-
console.log(hello);
var hello = 'world';

// will be hoisted like bellow
// var hello
// console.log(hello) which will log undefined
// hello = "world"


// 3-
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// this will log magnet.


// 4-
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// this will log super coll

// 5-
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// would  log chicken and half-chicken.

// 6-

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// would log san jose, seattle, burbank, san jose.

// 7-

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// would log am error, cuz we can't assign new value to a const variable like we are trying to do in (dojo = "closed for now")