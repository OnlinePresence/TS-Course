//BASIC TYPES

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1+n2;
    if (showResult) {
        console.log(phrase+result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

//add(number1, number2, printResult, resultPhrase);

//OBJECT & ARRAY TYPE

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Kamil',
    age: 25,
    hobbies: ['Cooking', 'Sports'],
    role: [2, 'author']  //Tuples need exactly 2 elements
};

//person.role.push('admin'); //Push is allowed on tuples, can be problematic
//person.role[1] = 10;
//person.role = [0, 'admin', 'author'];

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

//console.log(person.name);

for (const hobby of person.hobbies)  {
    console.log(hobby);
    //console.log(hobby.map());
}

//ENUM TYPE

enum Role { SUV, SEDAN,HATCHBACK };

const car = {
    brand: 'Ford',
    year: 2010,
    role: Role.SUV,
}