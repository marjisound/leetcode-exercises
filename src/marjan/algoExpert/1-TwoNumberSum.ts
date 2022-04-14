export function twoNumberSum(array: number[], targetSum: number) {
  const dict: Record<number, boolean> = {} 
  for (const num of array) {
    const target = targetSum - num;
    if(target in dict) {
      return [target, num];
    }

    dict[num] = true;
  }

  return [];
}

console.log(twoNumberSum([3, 4, 2], 5));