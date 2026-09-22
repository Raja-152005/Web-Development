console.log("Hello I am conditional tutorial")
let age=17;
let grace=2;
//Operators
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);
console.log(age%grace);
if((age+grace)>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}
console.log(age+=grace)

/* 
multi 
line 
comment
*/
age=0;
if(age==18){
    console.log("You can drive");
}
else if(age==0){
    console.log("Are you kidding?");
}
else if(age==1){
    console.log("Are you again kidding?");
}
else{
    console.log("You cannot drive");
}

// Ternary Operator
age==0?console.log("You can drive"):console.log("You cannot drive");
a=6;
b=8;
let c=a>b?a-b:b-a
console.log(c)