// Function
function nice(name){
    console.log("Hey "+name+" you are nice!");
    console.log("Hey "+name+" you are good!");
    console.log("Hey "+name+" your t-shirt is nice!");
    console.log("Hey "+name+" your course is good too!");
}
nice("Raja");
nice("Shiv");

function sum(a,b,c=3){
    // c is a default parameter here
    console.log(a+b+c);
    console.log(a,b,c);
    return a+b;
}
result1=sum(3,5);
result2=sum(13,15,1); //here c will consume 1.
console.log("The sum of these numbers is:",result1);
console.log("The sum of these numbers is:",result2);
sum(3); // It will return NaN cuz b value is undefined here

// Arrow Function
const func1=(x)=>{
    console.log("I am in arrow function",x);
}
func1(34);
func1(21);
func1(55);

