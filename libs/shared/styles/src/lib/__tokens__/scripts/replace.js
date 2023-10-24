/**
 * Replace all `custom-FontStyle` with `typography` in the json file
 * And replace all `custom-shadow` with `shadow` in the json file
 *
 * See: {@link style-dictionary-utils|https://github.com/lukasoppermann/style-dictionary-utils/issues/35}
 */
const fs = require('fs');

// Step 1: read the name of a json file from the command line
const fileName = process.argv[2];

// Step 2: read the old value from the command line
// const oldValue = process.argv[3];

// // Step 3: read the new value from the command line
// const newValue = process.argv[4];

// Step 4: read the json file
const jsonData = JSON.parse(fs.readFileSync(fileName));

let valueReplaced = false;

const replaceValue = (obj, oldValue, newValue) => {
  for (let key in obj) {
    if (obj[key] === oldValue) {
      obj[key] = newValue;
      valueReplaced = true;
    } else if (typeof obj[key] === 'object') {
      replaceValue(obj[key], oldValue, newValue);
    }
  }

  // if (!valueReplaced) {
  //   console.log(`Value ${oldValue} not found in JSON file.`);
  // } else {
  //   console.log(`Value ${oldValue} replaced with ${newValue} in JSON file.`);
  // }
};

// Step 5: replace the old value with the new value
replaceValue(jsonData, 'custom-fontStyle', 'typography');

replaceValue(jsonData, 'custom-shadow', 'shadow');

// Step 6: write the updated json file
fs.writeFileSync(fileName, JSON.stringify(jsonData, null, 2));
