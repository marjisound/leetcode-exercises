"use strict";
function isPalindrome(x) {
    const stringNum = x.toString();
    let left = 0;
    let right = stringNum.length - 1;
    while (left < right) {
        if (stringNum[left] !== stringNum[right])
            return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome(121));
