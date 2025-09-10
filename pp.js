let data=[10,11,20,30,11,9,9];
let duplicates=[];
for(let i=0;i<data.length;i++){
    for(let j=i+1;j<data.length;j++){
    if(data[i]===data[j] && !duplicates.includes(data[i])){ //checks whether the element is already present or not 
        duplicates.push(data[i]);
    }
}
}
console.log(duplicates);