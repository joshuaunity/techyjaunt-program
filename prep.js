const greet = (name) => {
    return `Hello, ${name}!`;
};

name = 'Jake';
console.log(greet(name)); // Hello, World!

const sayHi = (name = 'World') => {
    return `Hello, ${name}!`;
};

console.log(sayHi()); // Hello, World!
console.log(sayHi('Patrick')); // Hello, Patrick!

const addUp = (num1, num2) => {
    return num1 + num2;
}

console.log(addUp(2, 3)); // 5

// using the spread operator
// The reduce() method got its name from the functionality it provides, which is to iterate and “reduce” an array's values into one value.
const addScores = (...scores) => { 
    return scores.reduce((total, score) => total + score, 0);
}

// more reduce function samples compared to traditional approach
// tradtional approach
const items = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
];

let totalPrice = 0;

items.forEach(item => {
    totalPrice += item.price;
})

console.log(totalPrice); // 6

// using reduce
const totalPriceReduce = items.reduce((total, item) => total + item.price, 0);


// higher order functions
const call = (name) => {
    return `Hello, ${name}!`;
};

const callUser = (greetFunc, userName) => {
    return greetFunc(userName);
};

console.log(callUser(call, 'Alice')); // Output: Hello, Alice!'


// closure
const outer = () => {
    const message = 'Hello';
    const inner = () => {
        console.log(message);
    };
    return inner;
};

const innerFunc = outer();
innerFunc(); // Output: Hello


// async await
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}

// fetchData(); // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }


// test for async await performance compared to normal fetch

const fetchDataNormal = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
}

// fetchDataNormal(); // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// time the performance of both functions
console.time('fetchData');
fetchData();

console.timeEnd('fetchData');

console.time('fetchDataNormal');
fetchDataNormal();

console.timeEnd('fetchDataNormal');

// In the above the difference is not much but in real world scenarios, async await is faster than the normal fetch