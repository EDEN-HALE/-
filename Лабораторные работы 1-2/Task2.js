function highAndLow(numbers){
    let max = numbers[0]; 
    let min = numbers[0];
    
    for (let i = 0; i <= numbers.length - 1; i++){
        if (numbers[i] > max){
            max = numbers[i];
        }
        if (numbers[i] < min){
            min = numbers[i];
        }
    }
    return max + " " + min;
}


console.log(highAndLow([3, 7, 8, 5, 14]))