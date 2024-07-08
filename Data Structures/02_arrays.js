// Initialize an array of Marvel heroes
const marvel_heroes = ["Thor", "Ironman", "Spiderman"];

// Initialize an array of DC heroes
const dc_heroes = ["Superman", "Flash", "Batman"];

// Concatenate the two arrays to create a new array 'multiverse' containing both Marvel and DC heroes
const multiverse = marvel_heroes.concat(dc_heroes);
console.log(multiverse); // Output: ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]

// Initialize an array of heroes with duplicate entries
const heroes_with_duplicates = ["Thor", "Ironman", "Thor", "Spiderman", "Batman", "Batman"];

// Combine Marvel and DC heroes into one array using the spread operator
const all_new_heroes = [...dc_heroes, ...marvel_heroes];
console.log(all_new_heroes); // Output: ["Superman", "Flash", "Batman", "Thor", "Ironman", "Spiderman"]

// Sort the combined heroes array in alphabetical order
const sorted_heroes = all_new_heroes.sort();
console.log(sorted_heroes); // Output: ["Batman", "Flash", "Ironman", "Spiderman", "Superman", "Thor"]

// Initialize a nested array with some duplicate values
const another_array = [1, 2, 4, [5, 6, 7, 8], 5, 7, 8];

// Flatten the nested array into a single array
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // Output: [1, 2, 4, 5, 6, 7, 8, 5, 7, 8]

// Check if a string is an array
console.log(Array.isArray("Pikachu")); // Output: false

// Create an array from a string, where each character becomes an element in the array
console.log(Array.from("Pikachu")); // Output: ["P", "i", "k", "a", "c", "h", "u"]
