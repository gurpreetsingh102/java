const name ="gurpreet"
const repCount ="Singh"

console.log(name + repCount)  // old Mathod to combine value


// This is New Method to combine value
console.log(`Hello sir My name is ${name} My sire name is ${repCount}`)

// used to find key value 
const gameName = new String('gurpreet')


console.log(gameName[2])



console.log(gameName.__proto__);
console.log(gameName[2])// find which character is 

console.log(gameName.length); // use to find how many character
console.log(gameName.charAt(5)); // return the character which is in 5 position or number
console.log(gameName.indexOf('p')); // return the number what is 'p' character position number 


console.log(gameName.substring(0,5)) // tell which is character 0 to 5 under

console.log(gameName.slice(-6,4)) // TELL THE CHARACTER FROM ENDING 



const newName = "   Happy singh "
console.log(newName)
console.log(newName.trim()) 
                        // Used to remove the space from staring and Ending
                                // They are two type like 
                                        // trimStart = is used to rmove the space from STARTING
                                        // trimEnd = is used to remove the space from ENDING
                                        
console.log(newName.trimEnd())
console.log(newName.trimStart())


