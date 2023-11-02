// singeleton
//object.user {}

// object literals


const mysym =Symbol("key1")

const JsUser ={
    name: "piyush",
    "Full name": "piyush valand",
    age: 23,
    [mysym]:"mykey1",
    location:"surat",
    email:"piyushvaland0000@gmail.com",
    isLoggedIn: false,
    lasstLoginDays: ["monday", "saturday"]
   

}
console.log(JsUser.email)//print 
console.log(JsUser["email"])//print
console.log(JsUser["Full name"])//print other way using[]
console.log(JsUser[mysym]) // add symbol in objest print 
// dont chenge valuve in object using freeze
JsUser.email="piyushvaland5651@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");

};
console.log(JsUser.greetings);
  

//const tinderuser = new Object() ---singeleton object 
const tinderuser ={}

tinderuser =  "123abc"
tinderuser.name = "piyush"
tinderuser.isLoggedIn = false
//console.log(tinderuser);

const regularUser = {
    email: "piyushvaland@gmail.com",
    Fullname :{
        userfullname : "piyush valand",
    }
}
  
