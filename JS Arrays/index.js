// Array Creation
let arr=[1,2,4,5,7]
console.log(arr,typeof arr);
console.log(arr.length);
console.log(arr[1]);
console.log(arr[4]);

// Array is mutable
arr[0]=5666;
console.log(arr)

// Some array methods
// Convert array into String
console.log(arr.toString());
// commas replaced by " and "
// join() join all the array elements using a separator
console.log(arr.join(" and "));
// pop() removes last element from the array
console.log(arr.pop());
console.log(arr);
// push() adds a new element at the end of array
console.log(arr.push("Raja")); // It will return the new length of array
console.log(arr);
// shift() removes first element and return it
console.log(arr.shift());
console.log(arr);
// unshift() adds element at the beginning of the array and return new length of array
console.log(arr.unshift("Shiv"));
console.log(arr);
// To delete particular element 
delete arr[3]
console.log(arr);
console.log(arr.length);
// But length is still same, deleted element place is filled with empty
console.log(arr[3]);
// concat() join arrays in given array
arr2=[2,4,5,3,9]
arr3=[11,23,45,67,89]
arr4=[-1,"raj","babygirl"]
console.log(arr.concat(arr2,arr3,arr4));
// It doesn't not change existing arrays
console.log(arr);
// sort() sort array alphabetically
console.log(arr.sort());
// It modifies original array
console.log(arr);
// splice() used to add new items to an array with removing some old items
console.log(arr.splice(1,3)); //It will return removed items
// It remove 3 items from index 1 and modifies array
console.log(arr);
console.log(arr.splice(1,1,22,25));
console.log(arr);
// slice() slices out a piece of an Array.It creates a new array and does not modify original array
b=[12,34,56,78,89]
console.log(b.slice(2));
console.log(b);
console.log(b.slice(1,3));
console.log(b);
// reverese() reverses the array
console.log(b.reverse());
console.log(b)









