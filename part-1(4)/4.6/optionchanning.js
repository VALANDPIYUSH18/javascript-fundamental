/*Optional chaining is a feature in JavaScript that 
allows you to access the properties of an object or elements of an array 
without having to check whether the object or array is null or undefined first. It is represented by the ?.
operator and can be used to concisely access deeply nested properties without having to
write a long chain of if statements to check for null or undefined values.
  */
  const user = { 
    name: 'John', 
    age: 30, address:
    { street: 'Main St', city: 'New York', state: 'NY', zip: 10001 } 
    }; 
console.log(user?.address?.zip); // 10001
console.log(user?.phone?.number); // undefined