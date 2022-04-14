// Best solutiion is the 1st one using dictionary
// 1st solution using dictionary
function twoSum(nums: number[], target: number): number[] {
  const dict: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    console.log(dict);
    console.log(`item: ${nums[i]} ${nums[i].toString() in dict}`);
    if (nums[i].toString() in dict) {
      return [i, dict[nums[i]]];
    }
    const newTarget = target - nums[i];
    dict[newTarget] = i;
  }

  return [];
}

// 2nd solution using sorting and adding the smallest and biggest number
type indexedNum = { num: number; index: number };

const sortFunction = function (a: indexedNum, b: indexedNum): -1 | 1 | 0 {
  if (a.num < b.num) return -1;
  if (a.num > b.num) return 1;
  return 0;
};

function twoSum2(nums: number[], target: number): number[] {
  const newNums: indexedNum[] = nums
    .map((num, index) => {
      return { num: num, index: index };
    })
    .sort(sortFunction);

  console.log(newNums);
  let left = 0;
  let right = newNums.length - 1;
  while (left < right) {
    const addedNums = newNums[left].num + newNums[right].num;
    if (addedNums == target) {
      return [newNums[left].index, newNums[right].index];
    }
    if (addedNums > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

console.log(twoSum2([3, 2, 3], 6));
