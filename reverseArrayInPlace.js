function replaceArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];

    arr[i] = arr[arr.length - 1 - i];

    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

const test = replaceArrayInPlace([1, 2, 3, 74, 4, 5]);
