console.log("Hey! This is JS tutorial")
let a=5; //To create variable
let b=6; // outside block so it is global scoped 
var c="Raja";
var a2=80; //Don't use var , use let cuz it keeps variable block scoped.
console.log(a+b+8)
console.log(typeof a,typeof b,typeof c)
{
    let a1=66;
    var a2=99;
    let a=90;
    console.log(a)
    console.log(b)
    console.log(a2)
}
// console.log(a1) It will not accessed cuz it is block scoped
console.log(a2) //It will be accessed cuz it is global scoped
console.log("Outside block",a)
const a1=6;
// a1=a1+6; Not allowed beacuse a1 is constant, we cannot change it's value.

// Primitive Datatypes
let x="Raja Singh Rajput";
let y=21;
let z=3.55;
const p=true;
let q=undefined;
let r=null;
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
console.log(typeof null)

// Object
let o={
    name:"Raja",
    "job role":"employee",
    "is_handsome":true
}
console.log(o);
o.salary="100 crores";
console.log(o);
o.salary="500 crores";
console.log(o);

