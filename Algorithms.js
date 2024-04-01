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
function bubbleSort(arrOfNums) {
  let n = arrOfNums.length;
  let lastElement = n - 1;
  for (i = 0; i < lastElement; i++) {
    for (j = 0; j < lastElement - 1; j++) {
      if (arrOfNums[j] > arrOfNums[j + 1]) {
        var temp = arrOfNums[j];
        arrOfNums[j] = arrOfNums[j + 1];
        arrOfNums[j + 1] = temp;
      }
    }
  }
  return arrOfNums;
  /*
          example on how the code work, let arrOfNums = [9, 3, 5, 6, 7, 1, 8, 2, 0, 4]
          the first for loop grab all the value in arrOfNums 9, 3, 5, 6, 7, 1, 8, 2, 0, 4
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
let arrOfNums = [7, 9, 1, 5, 2, 10, 23, 6, 2, 4, 9, 34, 0, 8];
bubbleSort(arrOfNums);

//Converting Numbers to base 2
function mulBase(num, base) {
  var s = [];
  do {
    s.push(num % base);
    // take num modulus base and push the remainer to the s stack
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
let arr = [9, 5, 2, 0, 3, 7, 8, 4, 6];
function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    const guess = arr[mid];
    if (guess === target) return mid;
    if (guess > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return -1; // Not found
}
let result = binarySearch(arr, 7);
function verify(result) {
  console.log("Target found: ", arr[result]);
}
verify(result);

// Quick sort algorithm
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
  /*
    arr = [9, 5, 2, 0, 3, 7, 8, 4, 6]
    pivot is set at index[0] which is 9
    then we create empty left and right array
    For loop start at index[1] which is at 5 till the end of the array which is 6
    At every iteration the number is compare with the pivot and if it is less than pivot it is push to the 
    left else it push to the right
  */
}
let arr = [9, 5, 2, 0, 3, 7, 8, 4, 6];
quickSort(arr);
