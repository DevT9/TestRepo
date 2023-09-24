const myFunction = (a: number, b: number): void => {
    if(a === 0) {
        console.log("a is zero");
    }
    else if(b === 0) {
        console.log("b is zero");
    }
    else {
        console.log("a + b = " + (a + b));
    }
}

myFunction(1, 2);
myFunction(0, 3);
myFunction(4, 0);
myFunction(0, 0);
const x = 5;
const y = 7;
