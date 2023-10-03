/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    //we do a sliding window from biggest to smallest size
    let left = 0;
    let right = height.length -1 ;

    let content = Math.min(height[left], height[right]) * (right - left);
    
    //we loop until left and right meet
    while(left != right) {
      if(height[left] < height[right]) {
        left++;
      } else {
        right--;
      }

      content = Math.max(content, Math.min(height[left], height[right]) * (right - left));
    }

    return content;
};