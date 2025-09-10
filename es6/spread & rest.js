function sum(...nums){//expands so spread
    return nums.reduce((total,num)=>total+num);
}
let numbers=[10,20,30];
console.log(sum(...numbers));  //gathers so rest

