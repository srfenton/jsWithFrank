//06-25/2024
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
