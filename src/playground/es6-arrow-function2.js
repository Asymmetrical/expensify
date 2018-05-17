// augment objects

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

const user = {
    name: 'Johan',
    cities: ['Lund', 'Malmö', 'San Fransisco'],

    printPlacesLived() { // ES6 function that works
        console.log(this.name);
        console.log(this.cities);

        return this.cities.map((city) => this.name + ' has lived in city +' + city);
    }
}
console.log(add(4, 5));

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [4, 5, 8],
    multiplyBy: 3,
    multiply() {
        // is actually a replacer for forEach
        return this.numbers.map((singleNum) => singleNum * this.multiplyBy);
    }
};

console.log(multiplier.multiply());