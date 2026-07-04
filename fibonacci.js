function fibs(n){
    const arr = [];
    for(let i = 0; i < n; i++){
        if(i < 2){
            arr.push(i)
        } else {
            const newNum = arr[arr.length - 1] + arr[arr.length - 2];
            // console.log(newNum)
            arr.push(newNum)
        }
        
    }
    // console.log(arr)
    return arr

}

console.log(fibs(1))


// create a loop
// the loop will run n number of times
// save i to an array 
// if i < 2 save i to an array(push) 
// if i > 2 create a variable that holds the sum of the last two 
// items in the array then push that variable to the array


function fibsRec(n){
    console.log('test')
    if(n === 2){
        return [0, 1]
    } else if(n === 1){
        return [0]
    }

    const prevArr = fibsRec(n - 1);



    const nextNum = prevArr[prevArr.length - 1] + prevArr[prevArr.length - 2]
    
    prevArr.push(nextNum);


    return prevArr

}

console.log(fibsRec(6))