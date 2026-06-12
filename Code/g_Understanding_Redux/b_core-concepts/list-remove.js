// old way
let list = [1, 2, 3];
let index = list.indexOf(1);
list.splice(index, 1);
console.log('old way list is '+ list); 

// redux way
let immutableList = [1, 2, 3];
let newList = immutableList.filter(item => item !== 1);
console.log('new way newList is '+ newList); 
console.log('new way immutableList is '+ immutableList); 



