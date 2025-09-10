// using arrays
let arr1=[1,2,3];
let arr2=[4,5,6];
let combined=[...arr1,...arr2];
console.log(combined);
let copy=[...arr2];
console.log(copy);

// using function class
function sum(a,b,c){
    return a+b+c;
}
let numbers=[10,20,30];
console.log(sum(...numbers));

//using objects
let person={name:"vinay",age:22};
let extra={city:"bglr"}
let merged={...person,...extra};
console.log(merged);
let copyobj={...extra};
console.log(copyobj);

