// Looping through arrays
//for loop
let a=[1,93,5,6,88]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}
// for each loop
a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})
// for in loop
let obj={
    a:1,b:2,c:3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    // this if case is helful to show only relevant properties of object
    // and not show extra added properties of any built in object
    const element = obj[key];
    console.log(key,element) 
}
// for of loop
for (const element of a) {
    console.log(element)
}