//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i =0; i < dog_string.length; i++){
        console.log(dog_string[i])
    }
    }



//Call method here with parameters
console.log(findWords()) 


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1,'even index')
        }
    }
    return arr
}
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Codewars Exercise 1
//Check for factor
function checkForFactor(base, factor){

    if (base % factor == 0){
      return 'Is factor'
    }
  
  return 'Is not factor'
}
checkForFactor(10,2)

// Remove First and Last Character

function removeChar(s) {
    s = s.slice(0,s.length-1) 
    s = s.slice(1)

    console.log(s)
    }


removeChar('eloquent')