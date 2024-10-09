//==============================Part 1======================
// function that takes an array of numbers  and returns the sum
function arraySum(arr) {
    let sum = 0;
    arr.forEach(element => { sum += element });
    return sum;
}

// Function that returns the average of an array of numbers
function arrayAverage(arr) {
    let sum = 0;
    arr.forEach(element => { sum += element });
    return sum / arr.length;
}

//Function that takes an array of strings and returns the longest string 
function longestString(arr) {
    let longest_string_length = arr[0].length;
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest_string_length) {
            longest_string_length = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}

function stringLongerThan(arr, n) {
    const resultArray = [];
    arr.forEach(element => {
        if (element.length > n) {
            resultArray.push(element)
        }
    });
    console.log(resultArray)
}

function printNumber(n) {
    if (n == 1) {
        console.log(1);
        return;
    }
    console.log(n);
    printNumber(n - 1);
}



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arraySum(array))
console.log(longestString(["Je taime alitalliene ma petite cherie adoree", "ti jo zenny", "Evans ti kouto", "Moise Jean philippe gro volo kabrit", "ti herard jean gilles"]));
stringLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
printNumber(18);

//=========================Part2===========================================
console.log('=========================Part2======================')
const arrayData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];

arrayData.sort((a, b) => a.age - b.age)
console.log('sorted array', arrayData);

const filteredArray = arrayData.filter((element) => element.age < 50)
console.log('Filtered over 50', filteredArray);


const modifiedArray = filteredArray.map((element) =>{
    element["job"] = element["occupation"];
    delete element["occupation"];
    let age_num = Number(element["age"])
        age_num += 1;
    element["age"] = age_num.toString()
    return element;
});

let sum_age = modifiedArray.reduce((accumulator, element) =>{
    return accumulator += Number(element.age)
}, 0);

let average_age = sum_age / modifiedArray.length;

console.log("Replaced Occupation by Job and incemented age", modifiedArray);
console.log("Sum of the age: ", sum_age);
console.log("Average age: ", average_age);
// =================================Part 3 ====================
console.log("============================Part3=====================");
const person = { id: "42", name: "Bruce", occupation: "Knight", age: "41" }
    
function modifiedAge(obj)
{
    // if the obj doesn't havethe age property 
    if (!('age' in obj))
    {
         obj.age = 0;
    }
    let temp_equivalent = Number(obj.age);
    temp_equivalent++;
    obj.age = temp_equivalent.toString()
    obj.updated_at = new Date(); 
    return;
}
//Testing function on an obj of the array
console.log('Before modifying the object', person);
modifiedAge(person);
console.log("after modification", person);

// Create copy of the obj

function copyObject(oldPerson)
{
     // if the obj doesn't havethe age property 
     if (!('age' in oldPerson))
        {
             oldPerson.age = 0;
        }
    oldPerson.updated_at = new Date(); 
    let jsonString = JSON.stringify(oldPerson);
    const new_copy = JSON.parse(jsonString); 
    let temp_equivalent = Number(new_copy.age);
    temp_equivalent++;
    new_copy.age = temp_equivalent.toString();
    return new_copy;
}
individual = { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }

console.log("Printing orginal object", individual)
 const new_person = copyObject(individual);
console.log("printing copy object",new_person);