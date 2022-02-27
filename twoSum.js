const twoSum = function (nums, target) {
  /*
    first thing I would need to do is check the numbers array and look for 
    a numbers that would equal the target. I would need to store the numbers
    then use some kind of conditional statement I would need to create an empty array to store the value
    
    */
  var newOrder = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        newOrder.push(i);
        newOrder.push(j);
      }
    }
  }
  return newOrder;
};

console.log(twoSum([2, 4, 5, 10], 6));
