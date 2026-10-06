console.log("JS-DOM")
console.log(document.body)

//Acessing Childs
console.log(document.body.children) //children doesnot consider texts or comments, it only consider elements(div,script).
console.log(document.body.children.length)
console.log(document.body.childNodes)
console.log(document.body.childNodes.length)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[2])
console.log(document.body.childNodes[3])
// console.log(document.body.childNodes[4]) //not exist
console.log(document.body.childNodes[1].childNodes)
let cont=document.body.childNodes[1]
console.log(cont)
console.log(cont.childNodes)
console.log(cont.firstChild)
console.log(cont.lastChild)
// But We are not interested in text Node. We would like to see cont childs as
// elements like div.box1,div.box2,div.box3...  so use firstElementChild,lastElementChild. It will
// consider only elements , not texts.
// text Node is not an Element, div is an element.
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
// We can apply styling also 
cont.lastElementChild.style.color="red"
cont.lastElementChild.style.backgroundColor="green"

//Accessing parent element
console.log(cont.lastElementChild.parentElement)

// Accessing sibling element
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[2].nextElementSibling)
console.log(document.body.firstElementChild.children[2].previousElementSibling)
console.log(document.body.firstElementChild.children[2].previousElementSibling.nextElementSibling)
// console.log(document.body.firstElementChild.children[0].previousElementSibling) //null
console.log(document.body.firstElementChild.children[0].previousSibling) //previousSibling considers all

// Targeting Table element
console.log(document.body.children[1])
console.log(document.body.children[1].rows)
// console.log(document.body.children[1].columns) //Not exist