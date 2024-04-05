// // //for loops

// // for ( let a = 1; a <= 8; a++ ) {
// //     //console.log(a);
// // }

// nums = [1, 3, 78, 21, 33, 61, 90];
// // for ( let a = 0; a <= 7; a++ ) {
// //     console.log(nums[a]); //nums[0]
// // }

// // //for instances where you cant the numbers of inputs in an array, we can make use of the 'for loops' function below

// // for ( let a = 0; a <= (nums.length -1); a++ ) {
// //     //minus 1 from an array toavoid undefine issue
// //     console.log(nums[a]); //nums[0]
// // }

// // while loops

// let p = 0;
// // while (true) {
// //     console.log(p);
// //     p++;
// // }

// // while (p <= (nums.length -1)) {
// //     console.log(nums[p]);
// //     p++;
// // }

// //do loops

// // let k =  0;
// // do {
// //     console.log(nums[k]);
// //     k++;
// // } 
// // //while (k <= 10);
// // while (k <= (nums.length -1)) //this will look through  everything in the array

// //other  ways to loop an array

// phones = ['tecno', 'pixel', 'itel', 'oppo', 'samsung'];
// // for (let phone of phones){
// //     console.log(phone);
// // }

// // for (let phone in phones){
// //     console.log(phones[phone]);
// // }

// //some inbuilt funtions
// phones.forEach(item => {
//     console.log(item);
// });




//lets create an object

// const car = {
//     make:  'toyota',
//     model: 'corolla',
//     year: 2009
// }
// console.log(car.make);
// console.log(car['year']);
// console.log(car.model);

// for (let item in car){
//     console.log(car[item]);
//     console.log(car.item);

// }

// const moveCar = () => {
//     console.log(`The ${car.make} has moved from the originaal position`);

// }

// car.move = moveCar;
// car.move();




// update car details
const updateCarDetails = ({make, year}) => {
    console.log(year, make)
    // this.make = make;
    // this.year = year;
    // console.log(make)
};

const company = {
    name: "inoson motors"
  
}
// console.log(`The ${company.name} is the original maker of ${company.name} motors`);

const car = {
    company: company,
    make: 'toyota',
    model: 'corolla',
    year: 2009,
    update: updateCarDetails
};

car.update({make: "audi", year: 2024});
console.log(`The ${company.name} the original maker of ${company.name} motors`);
console.log(car.company.name);
// console.log(car["year"]);
// console.log(year)
// console.log(make)

// const moveCar = () => {
//     console.log(`The ${car.make} has moved from the originaal position`);

// }
// car.move = moveCar;
// car.move();
