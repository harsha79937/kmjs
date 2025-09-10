function sum(...numbers){  // rest paramater
    return numbers.reduce((total,num)=>total+num);
}
console.log(sum(10,20));
console.log(sum(1020,1050));
