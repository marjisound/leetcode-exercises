function isPalindrome(x: number): boolean {
  const stringNum = x.toString();

  let left: number = 0;
  let right: number = stringNum.length - 1;

  while (left < right) {
    if (stringNum[left] !== stringNum[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome(121));
