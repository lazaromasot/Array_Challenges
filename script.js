// 1. Always Hungry

function alwaysHungry(arr) {
    var foodFound = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            foodFound = true;
        }
    }
    if (!foodFound) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// ____________________________________________________
// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// ____________________________________________________
// 3. Better than average

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var average = sum / arr.length;

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// _____________________________________________________
// 4. Array Reverse

function reverse(arr) {
    arr.reverse();
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// _____________________________________________________
// 5. Fibonacci Array

function fibonacciArray(n) {
    var fibArr = [0, 1];

    for (var i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
