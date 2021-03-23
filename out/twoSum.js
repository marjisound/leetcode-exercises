"use strict";
function twoSum(nums, target) {
    var result = [];
    var inProgress = true;
    for (var i = 0; i < nums.length && inProgress; i++) {
        console.log("new iteration i:", i);
        for (var j = i + 1; j < nums.length; j++) {
            var addedNums = nums[i] + nums[j];
            console.log("i: ", i);
            console.log("j: ", j);
            console.log("addedNums: ", addedNums);
            if (addedNums == target) {
                result = [i, j];
                inProgress = false;
                break;
            }
        }
    }
    return result;
}
twoSum([3, 3, 4], 6);
//let myArray = [2, 7, 11, 15]; let target = 11;
