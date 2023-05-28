//============================== CARRY FORWARD ======================

const findagpairs = () => {
    let a = "adgagagfg";
    a = a.split("");
    let answer = 0;
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === "a") {
            count++;
        } else if (a[i] === "g") {
            answer += count;
        }
    }
    console.log(`The total ag pairs are: ${answer}`);
};

//==================================================================

const countLeaders = () => {
    b = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1, 3, 4];
    let currentLeader = b[b.length - 1];
    let leaders = 1;

    for (let i = b.length - 2; i >= 0; i--) {
        if (currentLeader < b[i]) {
            leaders++;
            currentLeader = b[i];
        }
    }
    console.log(`Total leaders are: ${leaders}`);
};

//==================================================================

const findMinSubarray = () => {
    const find_min_max = (arr) => {
        // find min
        let minVal = 91991999999;
        for (i = 0; i < arr.length; i++) {
            if (minVal > arr[i]) {
                minVal = arr[i];
            }
        }

        let maxVal = 0;
        for (i = 0; i < arr.length; i++) {
            if (maxVal < arr[i]) {
                maxVal = arr[i];
            }
        }
        return { minVal, maxVal };
    };

    const solve = (arr) => {
        const { minVal, maxVal } = find_min_max(arr);
        let mini = -1;
        let maxi = -1;
        let answer = arr.length;

        for (let i = arr.length; i >= 0; i--) {
            if (arr[i] == minVal) {
                mini = i;
                if (maxi != -1) {
                    answer = Math.min(answer, maxi - mini + 1);
                }
            }

            if (arr[i] == maxVal) {
                maxi = i;
                if (mini != -1) {
                    answer = Math.min(answer, mini - maxi + 1);
                }
            }
        }
        return answer;
    };

    arr = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1, 3, 4];
    const answer = solve(arr);
    console.log(`The minimum subarray with min and max : ${answer}`);
};
//==================================================================

// findagpairs();
// countLeaders();
// findMinSubarray();

// ============================ Some other questionss=================

//=================== Closest min max in given range==================
const closestMinMax = (a) => {
    let minIndex = -1;
    let maxIndex = -1;
    let answer = a.length;

    minVal = Math.min(...a);
    maxVal = Math.max(...a);
    if (minVal === maxVal) {
        return 1;
    }
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] == minVal) {
            minIndex = i;
            if (maxIndex === -1) {
                continue;
            }
            answer = Math.min(answer, Math.abs(minIndex - maxIndex) + 1);
        }
        if (a[i] === maxVal) {
            maxIndex = i;
            if (minIndex == -1) {
                continue;
            }
            answer = Math.min(answer, Math.abs(minIndex - maxIndex) + 1);
        }
    }
    return answer;
};

let a = [814, 761, 483, 981];
// console.log(closestMinMax(a));

//============================ Buy Sell Stocks========================
const buySellStock = (arr) => {
    let maxProfit = 0;
    let buy = 0;
    for (let sell = 1; sell < arr.length; sell++) {
        let currProfit = arr[sell] - arr[buy];
        console.log(buy, sell, currProfit);
        if (currProfit > 0) {
            maxProfit = Math.max(maxProfit, currProfit);
        } else {
            buy = sell;
        }
    }
    return maxProfit;
};

let arr = [7, 6, 4];
// console.log(buySellStock(arr));

//============================== Count Subarrays=====================
const countSubarrays = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count += str.length - i;
        }
    }

    return count % 10003;
};

const str = "abec";
// console.log(countSubarrays(str));

const evenSubArrays = (arr) => {
    const isEven = (num) => (num & 1) === 0;
    return isEven(arr.length) && isEven(arr[0]) && isEven(arr[arr.length])
        ? "YES"
        : "NO";
};
// console.log(evenSubArrays([2, 4, 20, 20]));

//============================= Some Random questions================
const Bulbs = (arr) => {
    let toggle = false;
    let count = 0;
    for (let i of arr) {
        if ((i === 0 && !toggle) || (i === 1 && toggle)) {
            count++;
            toggle = !toggle;
        }
    }

    return count;
};
// console.log(Bulbs([1, 0, 1, 0, 0, 1, 1, 0]));

//===================================================================
const pickFromBothSides = (arr, B) => {
    let start = 0,
        end = arr.length - 1;

    let back = B - 1,
        currSum = arr.slice(start, B).reduce((res, ele) => res + ele, 0);
    let answer = currSum;

    for (let totalOps = 0; totalOps < B; totalOps++) {
        currSum = currSum - arr[back] + arr[end];
        answer = Math.max(answer, currSum);
        back--;
        end--;
    }
    return answer;
};

// console.log(
//     pickFromBothSides(
//         [
//             -533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281,
//             -173, 961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708,
//             -618, 421, -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701,
//             35, 894, -297, 811, 322, -667, 673, -336, 141, 711, -747, -132, 547,
//             644, -338, -243, -963, -141, -277, 741, 529, -222, -684, 35,
//         ],
//         48
//     )
// );
