// mfs->map(),filter(),reduce()
let arr=[1,13,5,7,11]
// One way
let newArr=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2); 
}
console.log(newArr)
// Second Way using map()
let newArr_1=arr.map((e,index,array)=>{
    return e**2
})
console.log(newArr_1)

// filter()
const greaterthanseven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterthanseven))

//We can directly create function in filter() as:-
console.log(newArr.filter((e)=>{
    if(e>7){
        return true;
    }
    return false;
}))

//reduce()
let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))
// It works like add 1+2=3 then 3+3=6 then 6+4 this is the way going on...

// Array.from()
arr3=Array.from("Raja Singh Rajput")
 console.log(arr3)