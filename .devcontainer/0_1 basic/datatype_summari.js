// Primitive

// they are 7 type
 
        // String, Number, Boolearn, null, Undefined, Symbol, BigInt
 
        const score = 100
        const ScoreValue = 100.3

        const isLoggedIn = false
        const outsideTemp = null
        console.log(typeof outsideTemp)
        
        let userEmail;
        
        const id = Symbol('123')
        const anotherId = Symbol('123')

        console.log(id === anotherId);

        const bigNumber = 4165958445555515151545155166
        console.log(bigNumber)




  //Refrence (Non Primitive)
  
  //  They are three type
            
                    //Array, Objects, Funcation


  const name = ["Gurpreet singh", "Balraj singh", "happy"]
console.log(typeof name)


  let objects = {

        name: "Gurpreet singh",
        age: 20,
  }
  console.log(typeof objects)

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction)
