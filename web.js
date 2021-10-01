//******************* Module B Assignment 3 ********************//
//Q:1  We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']
let array = ['LA', 'new york', 'karachi','islamabad']
let [city1, city2, city3, city4] = array;

//Q:2 We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}
let stuRecord = {name:'Marry',age:20,rollNo:2}
let {name:studentName, age:studentAge,rollNo:studentrollNo } = stuRecord;

//Q:3 A function is taking 5 arguments and You have to pass it through an array.
//let arr = [1,2,3,4,5]

let newArr = [1,2,3,4,5]
const retrunArray = (num1,num2,num3,num4,num5)=>{
   return [num1,num2,num3,num4,num5]
}
console.log(retrunArray(newArr[0], newArr[1],newArr[2],newArr[3],newArr[4],));

//Q:4 Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value
//let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
//let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']

let firstNames = ['Ghanwa', 'Amna', 'Sunbal']
let lastNames = ['Gul Bahar', 'Khan', 'Abro']
if (firstNames.length == lastNames.length) {
    for (let i = 0; i < firstNames.length; i++) {
        const fullNames = firstNames[i].concat(lastNames[i]);
        
    }
}

//Q:5 Create an arrow function that takes array as an input and make each element double and then return an array 
let arr = [2,4,6,8]
let newNum = (num1,num2,num3,num4,)=>{
    return [Math.pow(num1,2),Math.pow(num2,2), Math.pow(num3,2),Math.pow(num4,2)]
    
}
console.log(newNum(arr[0],arr[1],arr[2],arr[3]));

//Q:6 Create an arrow function that takes a number and return square of a number
let numbers = 10;
let sum = (num)=>{
   return Math.pow(num,10)
}
console.log(sum(numbers)); 

/*Q:7 question: `var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
which alert will run
 
answer: you r allowed
*/



/*Q:8 question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer

       answer: no
        */


/*Q:9 question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny']
        
        answer:'snickers'
        
        */

        //Q:11 let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here
   
  // answer:He's often called "Johnny"

  /*function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
// welcomeMsg("Faiza")
// welcomeMsg()
I have called funtion twice , share the answer what is printed each time

answer: first welcome fiza, second welcome everyone 
*/

//Q:12 make a promise that resolves after 5 sec. Use setTimeOut for resolve.
 let promise = new Promise( (reslove,rejecte)=>{
     const myCity = "Karachi Sindh!";
     if (myCity == "Karachi Sindh!") {
        reslove() 
     } else {
        rejecte() 
     }


 setTimeout(()=>{
    promise.then(function () {
        console.log('promise resolve');
    })
 })
 promise.catch(function () {
     console.log('promise rejected');
 })

},5000)















































