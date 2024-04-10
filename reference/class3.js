const sayHi = (name) => {
    console.log("hello there, " + name);
}

// sayHi("helin")

const whatCar = ({brand = "Honda", color}) => {
    console.log("This is the " + brand + " brand with a color of " + color); 
}

// whatCar("lexus", "blue")
// whatCar({ brand: "lexus", color: "blue" })

const sumUpValues = ({x, y, z}) => {
    let c = x + y + z;
    return c;
}

console.log(sumUpValues({ x: 2, y: 3, z: 1 }))

const fullName = ({ firstname, lastname }) => {
    return firstname + " " + lastname;
}

console.log(fullName({ firstname: "fatima", lastname: "lanre" }));

const scores = [20, 30, 68, 12]
const englishscores = [50, 70, 10]
const scores2 = [...scores, ...englishscores]

const sumUpScores = (scores) => {
    let sum = 0
    for (let score of scores) {
        // sum = sum + score // 1
        sum += score      // 2
    }

    return sum
}

console.log(sumUpScores(scores))

const sumUpScoresV2 = (...scores) => {
    return scores.reduce((total, score) => total + score, 0);
}

console.log(sumUpScoresV2(...scores2))


const totalScore = sumUpScores(scores);
console.log("sumFunc result: ", totalScore)