// // for loops
// for (let a = 1; a <= 8; a++) {
//     // console.log(a);
// }

// nums = [1, 3, 78, 21, 33, 61, 90]
// // for (let a = 0; a <= 7; a++) {
// //     console.log(nums[a]); // nums[0]
// // }

// // for (let a = 0; a <= (nums.length - 1); a++) {
// //     console.log(nums[a]);
// // }

// let p = 0;
// // while (p <= 6) {
// //     console.log(p);
// //     p++;
// // }

// // while (p <= (nums.length - 1)) {
// //     console.log(nums[p]);
// //     p++;
// // }

// // let k = 0;
// // do {
// //     console.log(nums[k]);
// //     k++;
// // } while (k <= (nums.length - 1));


// phones = ['tecno', 'pixel', 'itel', 'oppo', 'samsung'];
// // for (let phone of phones) {
// //     console.log(phone);
// // }

// // for (let phone in phones) {
// //     console.log(phones[phone]);
// // }

// phones.forEach(item => {
//     console.log(item);
// });

const updateCarDetails = ({ make, year }) => {
    console.log(make, year);
}

const company = {
    name: "asan vechiles"
}

const car = {
    company: company,
    make: 'Toyota',
    model: 'corolla',
    year: 2011,
    update: updateCarDetails
};

// car.update({ make: "Xiamoi", year: 2024})

console.log(car.company.name);
console.log(car.make);
console.log(car["year"]);

// for (let item in car) {
//     console.log(car[item]);
// }

// const moveCar = () => {
//     console.log(`The ${car.make} has moved from the original position`);
// }

// car.move = moveCar;
// car.move();
