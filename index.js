// Create an empty array to store 3 favorite snacks.
let snacks = [" frozen berries"," Greek yogurt","Canned fruit"]

// Console log the 2nd element of the array
console.log(snacks[1])

// Add a new snack to the end of the array.
snacks.push("apple")

// Console log the last element of the array using array.length to check
console.log(snacks[snacks.length-1])

// Add another snack to the start of the array.
snacks.unshift("greenapple")

// Console log the length of the array (should be 5!)
console.log(snacks.length)

// Change the 3rd element to a different snack
snacks[2] = "rice"

// Remove the first snack from the array
snacks.shift()

// Remove the last snack from the array
snacks.pop()

// Console log the whole array to check if your operations worked
console.log(snacks)

