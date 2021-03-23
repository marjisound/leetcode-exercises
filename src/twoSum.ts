function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  let inProgress = true;
  for (let i = 0; i < nums.length && inProgress; i++) {
    console.log("new iteration i:", i);
    for (let j = i + 1; j < nums.length && inProgress; j++) {
      let addedNums = nums[i] + nums[j];
      console.log("i: ", i);
      console.log("j: ", j);
      console.log("addedNums: ", addedNums);

      if (addedNums == target) {
        result = [i, j];
        inProgress = false;
      }
    }
  }

  return result;
}

twoSum([3, 3, 4], 6);

//let myArray = [2, 7, 11, 15]; let target = 11;
