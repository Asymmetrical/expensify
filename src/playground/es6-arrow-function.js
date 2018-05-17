// ES5
function square (x) {
    return x*x;
};

console.log(square(4));

// ES6 standard good for promises etc
// const squareArrow = (x) => {
//     return x*x;
// };

// consise version of a function
// implicit return x*x
const squareArrow = (x) => x*x;

const myName = 'Johan Wastring';
const firstName = (fullName) => fullName.split(' ')[0];
const firstNameStandard = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(squareArrow(9));
console.log(firstName(myName));
console.log(firstNameStandard(myName));