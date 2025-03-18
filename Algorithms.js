// Fibonacci number sequence
function fibonacci(length) {
  if (length == 0 || length == 1) {
    return 1;
  }
  var arr = [0, 1];
  // arr is an array with two element 0 and 1
  for (i = 2; i < length; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    example = [0, 1, 1, 2, 3, 5, x, y, z];
    // arr[i-1] i.e length = 7 arr[7-1] = arr[6] and example arr[6] pick the value of 5
    // go one step backward i.e pick the prev index. for example pick 5
    // arr[i-2] go two step backward and pick the index. pick 3
    // add the value in those index. 5 + 3 = 8
    // so x is 8
  }
  return arr;
}
fibonacci(12);

// dynamic Fibonacci number series
const dynFib = (n) => {
  let arrList = [];
  for (let i = 0; i <= n; i++) {
    arrList[i] = 0;
    if (n == 1 || n == 2) {
      return 1;
    } else {
      arrList[1] = 1;
      arrList[2] = 2;
      for (let i = 3; i <= n; i++) {
        arrList[i] = arrList[i - 1] + arrList[i - 2];
      }
      return arrList;
    }
  }
};

// bubbleSort algorithms
function bubbleSort(arrOfNumbers) {
  let n = arrOfNumbers.length;
  let lastElement = n - 1;
  for (i = 0; i < lastElement; i++) {
    for (j = 0; j < lastElement - 1; j++) {
      if (arrOfNumbers[j] > arrOfNumbers[j + 1]) {
        var temp = arrOfNumbers[j];
        arrOfNumbers[j] = arrOfNumbers[j + 1];
        arrOfNumbers[j + 1] = temp;
      }
    }
  }
  return arrOfNumbers;
  /*
          example on how the code work, let arrOfNumbers = [9, 3, 5, 6, 7, 1, 8, 2, 0, 4]
          the first for loop grab all the value in arrOfNumbers 9, 3, 5, 6, 7, 1, 8, 2, 0, 4
          the second for loop grab the first value which is 9 and compare it with 3,5,6,7,1,8,2,0,4 
          and if 9 is greater than any of the number it swap to other position till reach the end of the loop 
          which is 4 
          the second comparing take 3 and compare it with 5, 6, 7, 1, 8, 2, 0, 4 and swap if it greater than
          any of this value it swap it to the other position
          the third comparing take 5 and compare it with 6, 7, 1, 8, 2, 0, 4 e.t.c
          NOTICE: at every comparing the length of the loop reduces by 1 and that is what this code 
          j < lastElement - 1; mean
          At every number that is pick to run the loop the length is decrement by 1 and this code
          (j < lastElement - 1;) in the comparing loop
       */
}
let arrOfNumbers = [7, 9, 1, 5, 2, 10, 23, 6, 2, 4, 9, 34, 0, 8];
bubbleSort(arrOfNumbers);

//Converting Numbers to base 2
function mulBase(num, base) {
  var s = [];
  do {
    s.push(num % base);
    // take num modulus base and push the remainder to the s stack
    num = Math.floor((num /= base));
    // take num and divide it by it base and return it as num example take 32/2 and return 16 and the new num
  } while (num > 0);
  // continue running the loop as long as num great than zero when num is equal to zero the condition turn false
  // and the while loop terminate
  var converted = "";
  while (s.length > 0) {
    converted += s.pop();
    // then get back the value in the s array obeying LIFO
  }
  return converted;
}
var num = 32;
var base = 2;
var newAnswer = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newAnswer);

// Binary search
let arrays = [9, 5, 2, 0, 3, 7, 8, 4, 6];
function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    const guess = arrays[mid];
    if (guess === target) return mid;
    if (guess > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return -1; // Not found
}
let result = binarySearch(arrays, 7);
function verify(result) {
  console.log("Target found: ", arrays[result]);
}
verify(result);

// Quick sort algorithm
function quickSort(array) {
  if (array.length <= 1) return array;
  const pivot = array[0];
  const left = [];
  const right = [];
  for (i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
  /*
    array = [9, 5, 2, 0, 3, 7, 8, 4, 6]
    pivot is set at index[0] which is 9
    then we create empty left and right array
    For loop start at index[1] which is at 5 till the end of the array which is 6
    At every iteration the number is compare with the pivot and if it is less than pivot it is push to the 
    left else it push to the right
  */
}
let numberArrays = [9, 5, 2, 0, 3, 7, 8, 4, 6];
quickSort(numberArrays);

// Best time to Buy and Sell stock
function maxProfit(prices) {
  const n = prices.length;

  // 2D DP array to store max profit with 0 and 1 stocks

  const dp = new Array(n).fill(null).map(() => [0, 0]);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  // loop through prices to calculate max profit at each day
  for (let i = 1; i < n; i++) {
    // choice 1:  buy the stock at i,in which case the profit we get is
    // the maximum profit we could have made till i - 1  minus the price at i
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);

    // choice 2: sell the stock at i, in which case the profit we get is
    // the maximum profit we could have made till i - 1 by buying the stock
    // earlier plus the price at i

    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  // return the maximum profit calculated from the last day
  return Math.max(dp[n - 1][0], dp[n - 1][1]);
}
// given prices
const prices = [7, 2, 5, 3, 1];
// function call
console.log(maxProfit(prices));

function areAnagram(string1, string2) {
  // get length of both string
  let n1 = string1.length;
  let n2 = string2.length;
  // if length of both string is not equal then
  // they cannot be anagram

  if (n1 !== n2) {
    return false;
  }
  str1.sort();
  str2.sort();

  // compare sorted strings
  for (let i = 0; i < n1; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }
  return true;
}
let string1 = ["s", "i", "l", "e", "n", "t"];
let string2 = ["l", "i", "s", "t", "e", "y"];
console.log(areAnagram(string1, string2));


const insertionSort = (arr) => {
  var current;
  var j;

  for(let i = 1; i < arr.length - 1; i++){
    current = arr[i];
    j = i - 1;

    while(j >= 0 && arr[j] > current){
      arr[j + 1] = arr[j]
      j--
    }
    arr[j+ 1] = current
  }
 }
 let arr = [6,2,4,7,1,9,10]
 insertionSort(arr)
