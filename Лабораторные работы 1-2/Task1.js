function revrseList(arr){
    const newArr = [];
    for (let i = arr.length -1 ; i >=  0; i--){
        newArr.push(arr[i])
    }
    return newArr;
}

console.log(revrseList([1, 2, 3, 4, 5]))