"use strict";
function isPalindrome(x) {
    var stringNum = x.toString();
    var left = 0;
    var right = stringNum.length - 1;
    while (left < right) {
        if (stringNum[left] !== stringNum[right])
            return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome(121));
