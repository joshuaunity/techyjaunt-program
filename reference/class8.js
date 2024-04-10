// try {
//     // newErObj = new Error('This is a new error');
//     // throw newErObj
//     throw new Error('This is a brand new error');
// } catch (error) {
//     console.log(error.message);
// }


class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        return this._age = newAge;
    }
}

class Student extends Person {
    constructor(name, age, matricNum) {
        super(name, age);
        this._matricNum = matricNum;
        this._subjects = [];
    }

    get matricNum() {
        return this._matricNum;
    }

    addSubject(subject) {
        // check if the subject is the correct datatype
        if (typeof subject !== 'object'){
            throw new Error(`subject passed is of type ${typeof subject}, it should rather be of type object`)
            // return `subject passed is of type ${typeof subject}, it should rather be of type object`
        } 
        // check if the name and grade is present in the object
        if (!subject.hasOwnProperty("name") || subject.grade === undefined) {
            return `name or grade is missing from this subject`
        }
        // add subject to student's sujects data
        this._subjects.push(subject)
        return `${subject.name} has been added to ${this._name} data successfully`
    }


    calculateAvg() {
        if (this._subjects == []) {
            return `${this._name} does not have any subjects added`
        }

        // let sum = 0;
        // this._subjects.forEach((subject) => {
        //     sum += subject.grade
        // })
        const sum = this._subjects.reduce((total, subject) => total + subject.grade, 0)
        const avg = sum / this._subjects.length;
        return avg;
    }
}

const student1 = new Student('taiwo', 24, '024NMH9000H');
console.log(student1.name)
console.log(student1.age)
// console.log(student1.matricNum)

subject1 = {
    name: 'physics',
    grade: 35
}
subject2 = {
    name: 'marketing',
    grade: 78
}
subject3 = {
    name: 'chemistry',
    grade: 50
}

// try {
//     console.log(student1.addSubject(subject1))
//     console.log(student1.addSubject(subject2))
//     console.log(student1.addSubject(subject3))
// } catch (error) {
//     console.log(error.message);
// }

// console.log(student1.calculateAvg())
student1.age = 56;
console.log(student1.age)
