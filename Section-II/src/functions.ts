//UNDEFINED, VOID, FUNCTION TYPE
function addNumbers(n1: number, n2: number){
    return n1 + n2;
}

function printNumbers(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

printNumbers(addNumbers(5,12));

//Any function with 2 parameters of type number and return of type number
let combineValues: (a: number, b: number) => number;

combineValues = addNumbers;
//combineValues = printResult;

console.log(combineValues(8,8));

// let undefinedValue: undefined;

addAndHandle(10, 20, (result) =>{
    console.log(result);
});