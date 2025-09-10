function add(x=0,y=0){
    return x+y;
}
add(x=5,y=11);
console.log(x+y);




function mul(a,b=10){
    return a*b;
}
console.log(mul(5));
console.log(mul(undefined,15));






function greet(name="guest"){
    console.log("hello! "+name);
}
greet()
greet("harsha")






function add(x=2,y=x+5){
    return x+y;
}
console.log(add());
console.log(add( undefined ,10));
console.log(add(5,10));



function sub(x=10,y=x-5){
    return x-y;
}
console.log(sub());
console.log(sub(15));
console.log(sub(20,13));



