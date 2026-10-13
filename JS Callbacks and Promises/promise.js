// Snippet 
alert('Raja');

//promise
console.log("This is Promises");
let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was not supporting you") //Reject our promise
    }
    else{
        setTimeout(()=>{
            console.log("Yes! I am done")
            resolve("Raja") //Our work is done
        },3000);
    }
})
// prom1.then((a)=>{ 
//     console.log(a)
// }).catch((err)=>{ //Handle error
//     console.log(err)
// })


let prom2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was not supporting you-2") //Reject our promise
    }
    else{
        setTimeout(()=>{
            console.log("Yes! I am done-2")
            resolve("Raja-2") //Our work is done
        },1000);
    }
})
let p3=Promise.all([prom1,prom2])
p3.then((a)=>{
    consolelog(a)
}).catch(err=>{
    console.log(err)
})
// let p3=Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })
// let p3=Promise.race([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })
