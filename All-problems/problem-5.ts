/**
 * Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
 */

// Sample Input:
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));

// Sample Output:
// Alice;

// --------------------------------------------------------
// ----------------Problem-5 Solution----------------------
// --------------------------------------------------------

function getProperty<T, K extends keyof T>(object: T, propertyName: K): T[K] {
    return object[propertyName];
} 

// Sample Input:
const person = { name: "Alice", age: 300 };

getProperty(person, "name") // Outputs name from person object as key 

getProperty(person, 'age') // Outputs objects key age 


