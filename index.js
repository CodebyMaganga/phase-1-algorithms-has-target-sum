function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let n = i + 1; n < array.length; n++) {
      if(array[i] + array[n] === target){
        return true
      }
      }
      
    }
    return false
  }

/* 
  Write the Big O time complexity of your function here
    0(n^2)
*/

/* 
  Add your pseudocode here
  1.iterate thru the array
  2.add the current index to the previous index
  3.check if the result is equals to the target
*/

/*
  Add written explanation of your solution here
  1.We declare a variable that iterate thru the array
  2.We declare another variable that is one index ahead of the previous iterator
  3.We add this two variables and check if they are equal to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

console.log(hasTargetSum([22, 19, 4, 6, 30], 25))