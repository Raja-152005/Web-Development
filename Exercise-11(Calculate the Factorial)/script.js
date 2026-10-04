let a=6
//One way (using reduce())
function factorial(number){
    let arr=Array.from(Array(number+1).keys()) //.keys()->gives number from 0 to number+1-1(6).
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    // shortcut:- reduce((a,b)=>a*b)
    return c
}
console.log(factorial(a))
// Second way (using for loop)
function facFor(number){
    let fac=1;
    for (let index = 1; index <= number; index++) {
        fac=fac*index;
    }
    return fac;
}
console.log(facFor(5))