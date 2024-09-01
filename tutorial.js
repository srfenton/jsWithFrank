//06-25-2024
//we talked about logical operators and switch statements 
// Create a function that loops from one to 100 but print  numbers between 50 and 72
// function twiceTheRemainder(firstNumber, secondNumber, thirdNumber, divisor){
//     sum = firstNumber + secondNumber + thirdNumber
//     remainder= sum / divisor
//     console.log(sum is ${sum})
//     console.log(remainder is ${remainder})

    
//     return  sum == (2*remainder)
    
//     }
    
//     console.log(twiceTheRemainder(4,4,4,2))

//07-01-2024
//we talked about for tenery operators and for loops
// function caseCheck(string){
//     for(let x of string){
//         if( x === x.toUpperCase()){
//             console.log(x)
//         }
//     }
    
// }

// caseCheck('snapShotOnYouTube')


//07-10-2024
//Create function that locates the middle character of any array and displays it.
// function displayMiddleCharacter(array){
//     let middleIndex;
//     if(array.length % 2 !== 0) {
//         //odd numbers get one middle index
//         middleIndex = [Math.floor(array.length/2)];
//         } else {
//         //even numbers get two middle indexes    
//         middleIndex = [Math.floor(array.length/2)-1,Math.floor(array.length/2)]; 
//         }
//     solution = []
//     for(let i = 0; i < array.length; i++){
//        if(middleIndex.includes(i)){
//             solution.push(array[i]);
//         }
//     }
//     console.log(solution);
// }

// displayMiddleCharacter('today')
// displayMiddleCharacter('frank')
// displayMiddleCharacter('peetsy')
// displayMiddleCharacter('sean')
// displayMiddleCharacter('journey')
// displayMiddleCharacter('enthusiastically')


//07-16-2024
//Create a function that randomly prints  a color that the function is run.
// function randomColor(){
//     let colors = ['red', 'orange','green', 'blue', 'indigo', 'violet']
    
//     return colors[Math.floor(Math.random()*colors.length)]go
// }

// console.log(randomColor())  
// console.log(randomColor())  
// console.log(randomColor())  
// console.log(randomColor())  
// console.log(randomColor())  
// console.log(randomColor())  
//we also discussed old fashioned for loops using a while loop, and for...in...
//i learned that keys are ordered and we can call the Object.keys() method to access their index number
//cool stuff


//07-29-24
// you will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
//destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

// //my attempt
// function destroyer(array, arg){
//     for(let i = 0; i < array.length; i++) {
//         if(array[i]===arg){
//         array.splice(i,1)    
//         }
//     }

//     console.log(array);

//     };

// destroyer([1, 2, 3, 1, 2, 3], 2)



// //solution
// function destroyer(arr, ...valsToRemove) {
//     return arr.filter(item => !valsToRemove.includes(item));
//     }


//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// example comparing the  the two arrays [2,3,5] and[1,2,5 ] their differences will be [1,3]

//my attempt
// function symmetricDifference(array1, array2){
//     let solution = [];
//     let array1Copy = [...array1];
//     let array2Copy = [...array2];
//     solution.push(array1Copy.filter(item => !array2.includes(item))[0]);
//     solution.push(array2Copy.filter(item => !array1.includes(item))[0]);
//     // console.log(array1Copy);
//     // console.log(array2Copy);
//     return solution
// }
// console.log(symmetricDifference([2,3,5],[1,2,5]))

// //franks solution
// const resultArray11=[...arrayOne,...arrayTwo]
// const myResult11=resultArray11.filter(differenece=> !(arrayOne.includes(differenece)&& arrayTwo.includes(differenece)))
// console.log(myResult11)

// //my attempt corrected
// function symmetricDifference(array1, array2){
//     let solution = [];
//     let array1Copy = [...array1];
//     let array2Copy = [...array2];
//     array1Copy = array1Copy.filter(item => !array2.includes(item));
//     array2Copy = array2Copy.filter(item => !array1.includes(item));

//     array1Copy.forEach(element => {
//         solution.push(element);
//     });
//     array2Copy.forEach(element => {
//         solution.push(element);
//     });
    
//     return solution;
// }


// console.log(symmetricDifference([2,3,5],[1,2,5]));

//8-6-2024
//Create a function  that  accepts words that  starts  and ends with uppercase letters.
// function caseChecker(word){
//     // console.log(word[0]); //for testing
//     // console.log(word[word.length-1]); //for testing
//     if (word[0].toUpperCase() === word[0] && word[word.length-1].toUpperCase() === word[word.length-1]){
        
//         return true
//     } else{
        
//         return false
//     }

// }

// console.log(caseChecker('PeetsY'))
// console.log(caseChecker('FranK'))
// console.log(caseChecker('Car'))
// console.log(caseChecker('alarM'))
// console.log(caseChecker('stop'))
// console.log(caseChecker('FINALTEST'))


// let stringExample = 'test';
// let backtic = `i am having a ${stringExample}`
// console.log(stringExample.indexOf('e'))
// console.log(stringExample.charAt(3))
// console.log(stringExample.split(''))
// let split = stringExample.split('')
// console.log(split.join(''))
// console.log(stringExample.startsWith('o'))
// console.log(stringExample.includes('test1'))
// console.log(stringExample.repeat())
// console.log(stringExample.replace('test','javascript'))

//08-19-2024
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// fearNotLetter("abce") should return the string d.

// function fearNotLetter(passsedLetterRange){
//     let missingCharacter;

    
//     for(let i = 1; i < passsedLetterRange.length; i++){
//         let currentCharCode = passsedLetterRange.charCodeAt(i)
//         let previousCharCode = passsedLetterRange.charCodeAt(i - 1);
//         if(currentCharCode !== previousCharCode + 1){
//             missingCharacter = String.fromCharCode(previousCharCode + 1); //convert the char code back to a string
//             break;
//         } 

//     }

//     return missingCharacter;
// }

// console.log(fearNotLetter('abce'));
// console.log(fearNotLetter('abcde'));

//We also briefly discussed the DOM and using it to perform some actions client side. This is coming at a great time since I could really use this to lessen server traffice for my japanese vocabulary program.

//08-31-2024
//Create a code using DOM that creates a strike through a word when a button is clicked. (see tutorial.html for implementation)