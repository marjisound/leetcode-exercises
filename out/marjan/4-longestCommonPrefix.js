"use strict";
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flig"]
Output: "fl"
*/
function longestCommonPrefix(strs) {
    const lengthList = strs.map((str) => ({ length: str.length, str: str }));
    lengthList.sort((a, b) => a.length - b.length);
    const max = lengthList[0];
    let maxLength = 0;
    while (maxLength <= max.length) {
        const sub1 = max.str.substring(0, max.length - maxLength);
        if (checkIfSubExistsInAll(lengthList, sub1))
            return sub1;
        else
            maxLength++;
    }
    return "";
}
const checkIfSubExistsInAll = (lengthList, sub) => {
    let index = 0;
    for (let i = 0; i < lengthList.length; i++) {
        if (!lengthList[i].str.startsWith(sub))
            break;
        index = i;
    }
    return index === lengthList.length - 1;
};
console.log(longestCommonPrefix(["reflower", "flow", "flight"]));
