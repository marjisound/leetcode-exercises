"use strict";
var romanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
};
function romanToInt(s) {
    var num = 0;
    var left = 0;
    while (left < s.length - 1) {
        if (romanDict[s[left]] >= romanDict[s[left + 1]]) {
            num += romanDict[s[left]];
        }
        else {
            num += romanDict[s[left] + s[left + 1]];
            left++;
        }
        left++;
    }
    if (left === s.length - 1)
        num += romanDict[s[left]];
    return num;
}
console.log(romanToInt("MCMXCIV"));
