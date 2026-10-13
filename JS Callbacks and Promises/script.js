// Asynchronous actions in JS
console.log("Raja is a Hacker!")
console.log("Raj is a Hacker!")
// setTimeout(()=>{
//     console.log("I am inside Timeout!")
// },2000)
// setTimeout(()=>{
//     console.log("I am inside Timeout!")
// },0)
setTimeout(()=>{
    console.log("I am inside Timeout-1!")
},3000);
setTimeout(()=>{
    console.log("I am inside Timeout-2!")
},2000); // It will run first
console.log("The End!");

//Callback function->function pass in other function
const fn=()=>{
    console.log("Nothing")
}
const callback=(arg,fn)=>{
    console.log(arg)
    fn()
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Raja",fn);
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js",callback)
// This src link we have taken from prism cdn js website 

// Callback hell (different to manage so many callbacks)
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js",(arg,fn)=>{
//     console.log(arg)
//     fn("firstarg",()=>{ //fn is one funtion
//         ddg("secondarg",()=>{  //ddg is second funtion
            
//         })
//     })
// })
// To handle callback hell-> we use promises 




