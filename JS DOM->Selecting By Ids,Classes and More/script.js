console.log("Searching the DOM");
// Access specific elements 
let boxes=document.getElementsByClassName("box")
console.log(boxes)
console.log(boxes.length)
// Apply styling 
boxes[2].style.backgroundColor="red"

// index 2->referring 2.5 box, But I want to color box-3, So give specific ID to that box. 
// ID is used to target particular element.
document.getElementById("greenbox").style.backgroundColor="green" 

document.querySelector(".box").style.backgroundColor="yellow"
// .box->CSS Selector referring class box.
// It will access only first element of class box 
console.log(document.querySelector(".box"))
// document.querySelector("#greenbox").style.backgroundColor="yellow"
// we can use ID selector also here 

// document.querySelectorAll(".box").style.backgroundColor="yellow" //error
console.log(document.querySelectorAll(".box"))
// We can use it on ID also. //console.log(document.querySelectorAll("#greenbox"))
// It will return HTML Collection of box class
// .style can apply on element , not on collection
// To access all elements of this collection , we will use forEachloop. 
document.querySelectorAll(".box").forEach(e=>{
    // console.log(e)
    // e.style.backgroundColor="purple"
})

console.log(document.getElementsByTagName("div"))
//Access all div elements

// document.getElementsByName search elements by the name attribute.

// Methods(.matches(),.closest(),.contains()) (helpful in searching the DOM).
let r=document.getElementsByTagName("div")
console.log(r[4].matches("#greenbox")) //check if element(r) matches with given CSS selector(#greenbox).
console.log(r[3].matches(".box"))
console.log(r[3].matches(".container"))
console.log(r[3].closest("#greenbox")) //to look for the nearest ancestor that matches the given CSS selector.The element(r) itself is also checked.
console.log(r[3].closest(".container")) // return parent class(closest ancestor)
console.log(r[4].closest("html")) //return parent of parent
console.log(document.querySelector(".container").contains(r[2])) // return true if element-B(r[2]) is inside or equal element-A(document.querySelector(".container")).
console.log(document.querySelector(".container"))
console.log(document.querySelector(".container").contains(r[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))
console.log(document.querySelector("body"))