/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user = {};

user.name = "piyush";
user.surname = "valand";

console.log(user) // chek object value --- o/p-- piyush , valand 

user.name = "ayush"; // using . we can chane value for user object
console.log([user])

delete user.name; 
console.log(user) // delete user name value