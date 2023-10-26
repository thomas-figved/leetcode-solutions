/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

  if(numRows==1) {
    return s
  }
  
  let direction = 1
  let resultArray = [s.substring(0,1)]
  let currentRow = 1

  for(let i = 1; i < s.length; i++) {

      if(currentRow in resultArray) {
        resultArray[currentRow]= resultArray[currentRow] + s.substring(i,i+1)
      } else {
        resultArray[currentRow]= s.substring(i,i+1)
      }

      if((i) % (numRows-1) == 0 ){
        direction = direction * -1
      }

      currentRow = currentRow + direction
  }

  return resultArray.join('')
    
};