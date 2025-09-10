const data = [10, 34, 56, 78, 11, 9, 9, 11];
const duplicates = [];

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j] )//&& !duplicates.includes(data[i])) 
        {
            duplicates.push(data[i]);
        }
    }
}

console.log(duplicates);
