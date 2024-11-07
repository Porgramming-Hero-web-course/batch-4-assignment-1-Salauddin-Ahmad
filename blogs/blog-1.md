# The Significance of Union and Intersection Types in TypeScript

## 1. Union Types in TypeScript

**Union Type** gives us the ability to use multiple types in on single variable or other places which give us flexiblity to define types.

We use the (`|`) syntax to use the union types

```typescript
 let union: string | number;
union = 'hello world';
console.log(union)// output: 'hello world;
union = 23;
console.log(union)// output: 23 ;

