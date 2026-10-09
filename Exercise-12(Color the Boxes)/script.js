console.log("Script.js initializing")
// let boxes=document.getElementsByClassName("box") //one way
let boxes =document.querySelector(".container").children //second way
console.log(boxes)
function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*(255-0));
    let val2=Math.ceil(0+Math.random()*(255-0));
    let val3=Math.ceil(0+Math.random()*(255-0));
    return `rgb(${val1},${val2},${val3})`
}
// Math.random() gives value between 0 to 1
// rgb values lie between 0 to 255
// To get random number between 0 to 255, we use "0+r(255-0)" where r is the random no. between 0 to 1.
// Math.ceil() used to keep values in integer 
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor();
    e.style.Color=getRandomColor();
})