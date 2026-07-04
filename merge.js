function mergeSort(arr){
    if(arr.length < 2) return arr;

    const newArr = [];

    
    const half = Math.ceil(arr.length / 2)
    const firstHalf = arr.slice(0, half)
    const secondHalf = arr.slice(half)

    const first = mergeSort(firstHalf)
    const second = mergeSort(secondHalf)

    while(0 < first.length && 0 < second.length){
            if(first[0] > second[0]){
                // second.shift()
                newArr.push(second.shift())
            } else {
                // first.shift()
                newArr.push(first.shift())
            }
    }

    if(first.length > 0){
        newArr.push(...first)
} else if(second.length > 0){
        newArr.push(...second)      
}


    return newArr


}


console.log(mergeSort([56, 3, 2, 6, 1]))
// sort numbers from that array by moving them to a new one
// base case once there are no more numbers in the original array


// if array is greater than 2 split array in half
// if array is array.length === 2 split in half then compare  
// if n > m newArr.push(m) else newArr.push(n)

// use a for loop to split array down ?
// whats the functionality

// would the recursive part be the splitting the array in half until you get one number from each array 
// once something is sorted push a new array then delete it from the original


// split an array in half until there are only one item with two arrays
// split that in half then check which num is smaller
// take the smaller num and put it in an array then take the larger num and put it after the smaller num
// 