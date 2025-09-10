//arrays
let numbers=[10,20,30];
for(let num of numbers){
    console.log(num);
}
// strings
let namev="harsha";
for(let x of namev){
    console.log(x)
}
//sets
let fruits=["apple","mango","jack"];
for(let edible of fruits){
    console.log(edible);
}
//maps
let map=new Map();
map.set("name:","harsha");
map.set("age:",22);
for(let [key,value] of map){
    console.log(key,value);
}