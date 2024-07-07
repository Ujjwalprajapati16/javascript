const name = "Pikachu";
const repoCount = 50;

// Using template literals to include variables in a string
console.log(`Hello, my name is ${name}, my repo count is ${repoCount}`);

const gameName = new String("Pokemon");
console.log(`My favorite game is ${gameName}`);

// Demonstrating various string methods

// Returns the character at the specified index (1 in this case)
console.log(gameName.charAt(1)); // 'o'

// Returns the Unicode of the character at the specified index (1 in this case)
console.log(gameName.charCodeAt(1)); // 111

// Joins the string with another string (" Go!" in this case)
console.log(gameName.concat(" Go!")); // 'Pokemon Go!'

// Checks if the string contains "Poke"
console.log(gameName.includes("Poke")); // true

// Checks if the string ends with "mon"
console.log(gameName.endsWith("mon")); // true

// Returns the index of the first occurrence of "k"
console.log(gameName.indexOf("k")); // 2

// Returns the index of the last occurrence of "o"
console.log(gameName.lastIndexOf("o")); // 5

// Searches the string for matches with the regular expression /o/g and returns them
console.log(gameName.match(/o/g)); // ['o', 'o']

// Repeats the string 2 times
console.log(gameName.repeat(2)); // 'PokemonPokemon'

// Replaces "Pokemon" with "Digimon"
console.log(gameName.replace("Pokemon", "Digimon")); // 'Digimon'

// Searches the string for "o" and returns the position of the match
console.log(gameName.search("o")); // 1

// Extracts a part of the string from index 1 to index 4 (not including 4)
console.log(gameName.slice(1, 4)); // 'oke'

// Splits the string into an array of substrings using "o" as the delimiter
console.log(gameName.split("o")); // ['P', 'kem', 'n']

// Checks if the string starts with "Pok"
console.log(gameName.startsWith("Pok")); // true

// Extracts characters from the string between index 1 and 4
console.log(gameName.substring(1, 4)); // 'oke'

// Converts the string to lowercase
console.log(gameName.toLowerCase()); // 'pokemon'

// Converts the string to uppercase
console.log(gameName.toUpperCase()); // 'POKEMON'

// Removes whitespace from both ends of the string
console.log(gameName.trim()); // 'Pokemon'

// Removes whitespace from the start of the string
console.log("  Pokemon  ".trimStart()); // 'Pokemon  '

// Removes whitespace from the end of the string
console.log("  Pokemon  ".trimEnd()); // '  Pokemon'

// Accessing a character directly using the index
console.log(gameName[0]); // 'P'

// Displaying the prototype of the string object
console.log(gameName.__proto__);

// Checking the type of gameName
console.log(typeof gameName); // 'object'

// Getting the length of the string
console.log(gameName.length); // 7
