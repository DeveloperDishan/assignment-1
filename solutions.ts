// Problem -1

const filterEvenNumbers = (arr: number[]): number[] => {
    const evenNum: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum.push(arr[i]);
        }
    }

    return evenNum;
}

// problem-2

const reverseString = (input: string): string => {

    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        reversed = reversed + input[i];
    }

    return reversed;
}




// problem-3

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
    if (typeof value === 'string') {
        return "String";
    } else {
        return "Number";
    }
}




// problem-4

const getProperty = <T>(obj: T, key: keyof T): T[keyof T] => {
    return obj[key];
}


// problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
    return {
        ...book,
        isRead: true,
    }
}




// problem 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}




// problem 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {

    const newArr: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }

    return newArr;
}
