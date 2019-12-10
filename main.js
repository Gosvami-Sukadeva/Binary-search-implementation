function dispArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] + "");
        if (i % 10 == 9) {
            console.log("\n");
        }

        if (i % 10 != 0) {
            console.log("\n");
        }
    }
}

function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBond = 0;
    while (lowerBond <= upperBound) {
        var mid = Math.floor((upperBound + lowerBond) / 2);
        if (arr[mid] < data) {
            lowerBond = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

var nums = [];
for (var i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}

dispArr(nums);
var val = 22;
var retVal = binSearch(nums, val);
if (retVal >= 0) {
    console.log("Found " + val + "at a particular position" + retVal);
} else {
    console.log(val + "is not present in the array");
}