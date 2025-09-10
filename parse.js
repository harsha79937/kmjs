let jsonnames=`["Harsha","Dinesh","vinay","Chandu"]`;
let jsonperson=`{"name":"Harsha","age":22,"city":"Bglr"}`;
let jsonpeople=`[{"name":"Harsha","age":22,"city":"Bglr"},{"name":"Dinesh","age":22,"city":"Bglr"},{"name":"Vinay","age":22,"city":"Bglr"},{"name":"Chandu","age":22,"city":"Bglr"}]`;
let jsonparse=JSON.parse(jsonpeople);
console.log(jsonparse);
