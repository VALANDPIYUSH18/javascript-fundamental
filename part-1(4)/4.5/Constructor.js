// const  person ={
//     firstnamr:   "piyus",
//     lastnamne :  "valand"
// }

/*construtor function si similar as aregular funtion but
they have a special property that they can be called with the new keyword.
and good practice to capitalize the first latter of your construtor funtion.

*/
function Person(first, last) {
    this.firstNAme = first,
    this.lastnamne = last
    // how add funtion in constuter function
    this.getFullname = function(){
        return this.firstNAme + " " + this.lastnamne
    }
        
}
/* A constucter function shoid be called only with "new" opreter
   we can use new kayword creat an object from constructor function
*/

// add obj using to new kayword and constuter function
const person1 = new Person("kunal","shah");
const person2 = new Person("raj","patel");

// access to full name method
console.log(person1.getFullname());

// console.log(person1);
// console.log(person2);
 //add propetie in person1
//  person1.age=30;
//  console.log(person1);
//  console.log(person1.age);
//   // if i try to access age from person2 --
//   console.log(person2.age)//---> o/p is undefined
   
//   // how add method in person2 

//   person2.greet = function(){
//     console.log("heelo piyush");
//   }
//   person2.greet();

