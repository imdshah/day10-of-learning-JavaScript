// This is an example of using array method map to create a new array with the squares of the numbers in the original array. 
// Map returns us some value for each element in the array and creates a new array with the results.

//Code:
// const arrayNum= [1,2,3,4,5,6,7,8,9,10];
// let squareNum = arrayNum.map( function (num){
//     return num * num;
// } ) 
// console.log(squareNum); 



// Here in this example below we are using forEach to iterate over the array and push the squares of the numbers in a new array.
// Here we are using forEach to get the same output as map, but forEach does not return a new array, it just executes the provided function once for each array element. So we have to create a new array and push the squares of the numbers in it.
// The difference between map and forEach is that map returns a new array with the results of calling a provided function on every element in the calling array(calling array is the array on which we are using these methods), while forEach does not return a new array, it just executes the provided function once for each array element. So if we want to create a new array with the results, we should use map, but if we just want to execute a function for each element in the array, we can use forEach.

//Code:
const arrayNum= [1,2,3,4,5,6,7,8,9,10];
const squareNum = []
arrayNum.forEach( (num) => {
    squareNum.push(num * num);
})
console.log(squareNum);
