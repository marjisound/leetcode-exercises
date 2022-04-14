"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoNumberSum = void 0;
function twoNumberSum(array, targetSum) {
    const dict = {};
    array.forEach(x => {
        console.log(dict);
        const target = targetSum - x;
        console.log(target);
        if (target in dict) {
            console.log("heyy");
            return [target, x];
        }
        dict[x] = true;
    });
    // for (const num of array) {
    //   const target = targetSum - num;
    //   if(target in dict) {
    //     return [target, num];
    //   }
    //   dict[num] = true;
    // }
    return [];
}
exports.twoNumberSum = twoNumberSum;
console.log(twoNumberSum([3, 4, 2], 5));
