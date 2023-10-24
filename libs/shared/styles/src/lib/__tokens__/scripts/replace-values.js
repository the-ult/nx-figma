
const fs = require('fs');

// Step 1: read the name of a json file from the command line
const fileName = process.argv[2];

// Step 2: read the old value from the command line
const oldValue = process.argv[3];

// Step 3: read the new value from the command line
const newValue = process.argv[4];

// Step 4: read the json file
const jsonData = JSON.parse(fs.readFileSync(fileName));

// Step 5: replace the old value with the new value
let valueReplaced = false;
const replaceValue = (obj) => {
  for (let key in obj) {
    if (obj[key] === oldValue) {
      obj[key] = newValue;
      valueReplaced = true;
    } else if (typeof obj[key] === 'object') {
      replaceValue(obj[key]);
    }
  }
};
replaceValue(jsonData);

if (!valueReplaced) {
  console.log(`Value ${oldValue} not found in JSON file.`);
}

// Step 6: write the updated json file
fs.writeFileSync(fileName, JSON.stringify(jsonData, null, 2));
console.log(`Value ${oldValue} replaced with ${newValue} in JSON file.`);
