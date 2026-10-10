console.log(document.querySelector('.box'))
console.log(document.querySelector('.box').innerHTML) //To get HTML inside box
console.log(document.querySelector('.container').innerHTML)
console.log(document.querySelector('.box').innerText) //To get Text inside box
console.log(document.querySelector('.container').innerText)
console.log(document.querySelector('.container').outerHTML) //Give inside HTML and container also
console.log(document.querySelector('.container').tagName) //To get Tagname of selected element
console.log(document.querySelector('.container').nodeName)
// tagName is only for element and nodeName is for all nodes like text node, comment node 
console.log(document.querySelector('.container').textContent) //To get inside text content
// console.log(document.querySelector('.container').hidden="true") //It will hide this container

// We can change innerHTML of any Element 
console.log(document.querySelector('.box').innerHTML="Hey I am Raja") //document.querySelector('.box') select first element of class box
console.log(document.querySelector('.box').hasAttribute("style")) //check attribute is present or not
console.log(document.querySelector('.box').getAttribute("style")) //show style attribute
console.log(document.querySelector('.box').setAttribute("style","display: inline;")) //change attribute
console.log(document.querySelector('.box').getAttribute("style"))
console.log(document.querySelector('.box').attributes) // To get collection of all attributes
console.log(document.querySelector('.box').removeAttribute("style")) //To remove attribute from element
console.log(document.querySelector('.box').hasAttribute("style"))
console.log(document.querySelector('.box').dataset) //To get custom attribute

// Insert Nodes
let div=document.createElement("div"); //To create element
div.innerHTML="I have been inserted <b>by Raja</b>"
div.setAttribute("class","created");
document.querySelector(".container").append(div) //To add element at end of the node
// document.querySelector(".container").before(div) //Insert before node
// document.querySelector(".container").after(div) //Insert after node
// document.querySelector(".container").prepend(div) //Insert at the beginning of node
// document.querySelector(".container").replaceWith(div) //Replace node with the given node
// We can check Insertion using inspect->Elements that where we are inserting 

let cont=document.querySelector(".container")
// To insert HTML
cont.insertAdjacentHTML("afterend","<b>I am under the Water. Plzz help me.</b>")
// afterend->Insert HTML immediately after element 
// afterbegin->Insert HTML into element at the beginning
// beforeend->Insert HTML into element at the end
// beforebegin->Insert HTML immediately before element

// Remove Node
// document.querySelector(".box").remove()

//className and classList
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)
console.log(document.querySelector(".container").classList.add("harry")) //adds a class
console.log(document.querySelector(".container").classList.remove("bg-green")) //removes a class
console.log(document.querySelector(".container").classList.toggle("raja")) //Adds the class if it doesnot exist, otherwise removes it.
console.log(document.querySelector(".container").classList.contains("red")) //checks class
console.log(document.querySelector(".container").classList)