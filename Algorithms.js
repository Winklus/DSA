// ============================ fibonacci number series ========================
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
