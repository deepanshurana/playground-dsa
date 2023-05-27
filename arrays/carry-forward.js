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

findagpairs();
countLeaders();
findMinSubarray();
