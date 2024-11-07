# The Significance of Union and Intersection Types in TypeScript

## 1. Union Types in TypeScript

**Union Type** gives us the ability to use multiple types in a single type which give us flexiblity to use diffrent types.


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
**Intersection Type** is a type that allows us to combine multiple types into a single type or other words gather and use diffrent types together as a obejct or array


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
```

## Both Intersection and union types are very important in typescript

**Intersection** allows multiple types to be one usefulll for object needs diffrent properties from severeal types.

**Union** allows multiple types to be used in a single type which is very useful for function parameters and return

So Intersection is combining types and union is choosing from types

## example
Here is an example below which is both union and and intersection
so we can use both name and age and also only name if we want showcasing the important flexiblity it gives us

```typescript
type Person = {name: string} & {age: number} 

const user: Person = {name: 'Salauddin'}
```






