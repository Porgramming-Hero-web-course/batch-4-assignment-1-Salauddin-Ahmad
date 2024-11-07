# The Significance of Union and Intersection Types in TypeScript

## 1. Union Types in TypeScript

**Union Type** gives us the ability to use multiple types in on single variable or other places which give us flexiblity to define types.

We use the (`|`) syntax to use the union types

## 1.1 example of basic Union Types 
```typescript
 let union: string | number;
union = 'hello world';
console.log(union)// output: 'hello world;
union = 23;
console.log(union)// output: 23 ;
```


## 2. Intersection types
**Intersection Type** is a type that allows us to use diffrent types to stored in single type or other words gather diffrent types together


**example** here is an example below which shows us a type and interface is  used as like a single type with (&) symbol 


```typescript
type Person = {
    name: string;
    age: number | string;
    occupation: string;
}

interface Address {
    city: string;
    country: string;
}

type PersonWithAddress = Person & Address;

const user: PersonWithAddress = {
    name: "Salauddin",
    age: 27, 
    occupation: 'Programmer',
    city: "Dhaka",
    country: "Bangladesh"
};






