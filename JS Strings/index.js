console.log("This is Strings tutorial");
let a="Raja";
//Accessing String
console.log(a)
console.log(a.charAt(2))
console.log(a[0])
console.log(a[3])
console.log(a[5])
console.log(a.length)
 let real_name="Raja"
 let friend="Shiv"
 console.log("His name is "+real_name+" and his friend name is "+friend)

 // Template Literal
console.log(`His name is ${real_name} and his friend name is ${friend}`)
// let sentence = "this is "very" big " error
let sentence=`this is "very" 'big' thing`
console.log(sentence)

// Escape Sequences
// console.log("Raja"s") Error
console.log("Raja\"s")
console.log("Raja\'s")
// But we can also use template literal instead of this
console.log("Raja\ns")
console.log("Raja\ts")
console.log("Raja\rs")

// Some String methods
let b="Rudra"
console.log(b.length)
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.charAt(2))
console.log(b.slice(2,4)) //Slicing
console.log(b.slice(2)) //slice 2 to end
console.log(b.replace("u",2))
let m="asha"
console.log(m.replace("a",2))
// Replace only one occurence , not all occurences
let c="Ashutosh Shashank Shekhar"
let d=c.replace("Shashank","Shivam")
console.log(c)
console.log(d)
let e=c.concat(" "+d," Satyam"," Sundaram")
// We can use + operator also for concatenation
console.log(e)
f=" Satyam Shivam Sundaram "
console.log(f)
console.log(f.trim())
// trim() remove whitespaces from start and end
console.log(f.indexOf("Shi"))
console.log(f.startsWith(" Sat"))
console.log(f.endsWith("Shi"))

// Strings are immutable
f[1]="r" //Not work
f="rrr" //Replace in new string is possible
console.log(f+".....")