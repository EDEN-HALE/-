function matrixAddition(matrix1, matrix2){
    const newMatrix = [];
    for (let i = 0; i < matrix1.length; i++){
        const row = [];
        for (let j = 0; j < matrix1[i].length; j++){
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        newMatrix.push(row);
    }
    return newMatrix
}

console.log(matrixAddition([[2, 3], [2, 7]], [[3, 4], [5, 6]]))