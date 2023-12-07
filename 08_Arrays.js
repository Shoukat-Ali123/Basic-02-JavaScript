const array = [0, 1 , 2 , 3 , 4 , 5]
console.log(array);

// let arr = [1,2,3,4,5]
// console.log(arr.toString());
// console.log(typeof arr);

//Arrays Methods

array.push(6)
console.log(array);
array.pop()
console.log(array);

array.unshift(9)
console.log(array);
array.shift()
console.log(array);

console.log(array.includes(2));
console.log(array.indexOf(3));

const arr = array.join()
console.log(array);
console.log(arr);
console.log(typeof arr);

console.log(array.slice(0,3 ));
console.log(array.splice(1,3));