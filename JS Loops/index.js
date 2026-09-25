console.log("Loop Tutorial");
// for loop
let a=1;
for (let i = 0; i < 100; i++) {
  console.log(a+i);
}

// for in loop
let obj={
    name:"Raja",
    role:"programmer",
    company:"CodeWithMe AI"
}
for(const key in obj){
    console.log(key,obj[key]);
}

// for of loop
for(const c of "Raja"){
    console.log(c);
}

// while loop
let i=0;
while(i<6){
    console.log(i);
    i++;
}

// do-while loop
let j=10;
do{
    console.log(j);
    j++;
}while(j<6);