/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = 0; i< Math.ceil(matrix.length /2); i++) {
        let j = i;
        matrix = permute(i, j, matrix); //permute layer by layer
    }

    return matrix;
};

function permute(i, j, matrix) {
    //going through one layer
    length = matrix[i].length
    max_ind = length -1

    for(let iterator_j = j; iterator_j < length - 1 - i; iterator_j++) {
        
        let new_i;
        let new_j;
        let prev_i = i;
        let prev_j = iterator_j;
        let prev_val = matrix[prev_i][prev_j] ;

        while(new_i != i || new_j != iterator_j) {
            
            new_i = prev_j;
            new_j = max_ind - prev_i;

            let temp_val = matrix[new_i][new_j];
            matrix[new_i][new_j] = prev_val

            prev_val = temp_val

            prev_i = new_i;
            prev_j = new_j;
        }
    }
    
    return matrix;
}