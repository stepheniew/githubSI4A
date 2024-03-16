console.log("ini adalah script external");
//ini single comment

/**
 * ini multi comment
 * 
 * 
 * 
 */

//mengenal variable 
let firstName="Stephen"; //string
let lastName=".";  //string 

var age=17;  //number(int)
console.log(typeof age);
const pi = 3.14; //number(float)
console.log(typeof pi);

//operator

//operasi string
let fullName = firstName + lastName;
console.log(fullName);
//operasi matematika
let a=10;
let b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//operator logika
let aString="10";
let aNumber=10;
console.log(aString == aNumber);
console.log(aString == aNumber);
console.log("Logika and dan or")
console.log(a<15 && b>8);
console.log(a>15 && b>8);
console.log(a<15 || b>8);
console.log(a>15 || b>8);

let text ="";
for(let i = 0; i<5; i++){
    text +="the number is " +i+"\n";
}
console.log(text);