/* Write functions that use the reduce method to implement your version of the following Array methods:
forEach() , map(), filter() , indexOf() , slice() */

function myForEach(arr, callback){
    arr.reduce (callback(current, index, arr))
}

array = [1,2,3,4,5]
myForEach(array, (array)=>{})